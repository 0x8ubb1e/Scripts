// ==UserScript==
// @name								trigger
// @namespace						http://tampermonkey.net/
// @version							1.2.2
// @description					每天多时间点分别触发多个URL，每个URL每次只打开一次
// @author							0x8ubb1e
// @match								*://*
// @match								*://*/*
// @match								*://*/*/*
// @icon								https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.com
// @updateURL					https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/trigger.js
// @downloadURL				https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/trigger.js
// @grant GM_addStyle
// ==/UserScript==
GM_addStyle(`
	* {box-sizing: border-box;font-family: "Microsoft YaHei", sans-serif}
	.task-widget {position: fixed;top: 50px;left: 50px;width: 350px;background: #fff;border-radius: 8px;box-shadow: 0 0 10px rgba(0, 0, 0, .2);resize: both;min-width: 280px;max-width: 500px;z-index: 999}
	.header {background: #4CAF50;color: #fff;padding: 10px;display: flex;justify-content: space-between;cursor: move}
	.header button {width: 30px;height: 30px;background: none;border: none;color: #fff;font-size: 16px;cursor: pointer}
	.list {max-height: 250px;overflow-y: auto;padding: 5px}
	.item {display: flex;align-items: center;padding: 6px;border-bottom: 1px solid #eee}
	.item .doneBtn {width: 16px;height: 16px;border-radius: 50%;border: 1px solid #999;cursor: pointer;margin-right: 5px;}
	.item.top {background-color: #eee;}
	.item.done .doneBtn {background: #999;}
	.item.done .name {text-decoration: line-through;color: #999;}
	.item.hidden {/* display: none */}
	.name {flex: 1;margin: 0 5px}
	.time {font-size: 12px;color: #666;margin-right: 5px}
	.ctrl button {width: 21px;background: none;border: none;font-size: 14px;cursor: pointer;margin: 0 2px}
	.add {padding: 10px;border-top: 1px solid #eee}
	.add input,.add button {width: 100%;margin-bottom: 5px;padding: 6px;border: 1px solid #ddd;border-radius: 4px}
	.add button {background: #4CAF50;color: #fff;border: none}
	.modal {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, .4);display: none;align-items: center;justify-content: center}
	.modal-content {background: #fff;padding: 20px;border-radius: 6px;width: 280px}
	.modal input {width: 100%;padding: 6px;margin: 5px 0}
	.modal button {margin: 5px 5px 0 0}
`);

(function () {
	'use strict';

	// 1. 配置
	const urls = [
		"https://18comic.vip/user/kafka97083/daily",
		"https://www.wwlib.cn/index.php/wuwen",
		"https://acgfun.pro/plugin.php?id=k_misign:sign"
	];

	const TIMES = ['00:00', '10:30', '13:00', "20:30"]; // 24h:mm
	const DONE_PREFIX = 'DUO_done_'; // localStorage 键前缀

	// 添加提示框
	const addPromptBox = () => {
		const div = document.createElement('div');
		div.innerHTML = '<!-- 主挂件 -->< div class="task-widget" id = "taskWidget" ><div class="header" id="header"><span>Tasklet</span><span><button id="pinBtn" title="置顶/取消置顶">📌</button><button id="minBtn" title="最小化">─</button></span></div><div class="list" id="list"></div><div class="add"><input id="newName" placeholder="任务名称" maxlength="50"><input id="newTime" type="time">< button id = "addBtn" > 添加任务</button ></div ></div >< !--编辑弹窗 --> <div class="modal" id="editModal"><div class="modal-content"><h4>修改任务</h4><input id="editName" placeholder="任务名称"><input id="editTime" type="time"><button id="saveEdit">保存</button><button id="cancelEdit">取消</button></div></div><script>/* ===== IndexedDB 初始化 ===== */const DB_NAME = "TaskletDB";const DB_VERSION = 1;let db;const openDB = () => new Promise((resolve, reject) => {const req = indexedDB.open(DB_NAME, DB_VERSION);req.onerror = e => reject(e);req.onsuccess = e => { db = e.target.result; resolve(); };req.onupgradeneeded = e => {const d = e.target.result;if (!d.objectStoreNames.contains("tasks")) {const store = d.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });store.createIndex("created", "created");}if (!d.objectStoreNames.contains("logs")) {d.createObjectStore("logs", { keyPath: "ts", autoIncrement: true });}};});/* ===== 日志写入 ===== */const log = (action, detail = {}) => {const ts = new Date();db.transaction("logs", "readwrite").objectStore("logs").add({ action, detail, ts });};/* ===== 任务 CRUD ===== */const getTasks = () => new Promise(res => {const tx = db.transaction("tasks", "readonly");const store = tx.objectStore("tasks");const req = store.getAll();req.onsuccess = () => res(req.result);});const addTask = (name, time) => {const created = new Date();return new Promise((resolve, reject) => {const tx = db.transaction("tasks", "readwrite");const store = tx.objectStore("tasks");const req = store.add({ name, time, created, done: false, hidden: false, top: false });req.onsuccess = () => {log("add", { id: req.result, name, time });resolve();};req.onerror = reject;});};const updateTask = (id, data) => {return new Promise((resolve, reject) => {const tx = db.transaction("tasks", "readwrite");const store = tx.objectStore("tasks");const req = store.get(id);req.onsuccess = () => {const old = req.result;Object.assign(old, data);const up = store.put(old);up.onsuccess = () => {log("update", { id, data });resolve();};};});};const deleteTask = (id) => {return new Promise((resolve, reject) => {const tx = db.transaction("tasks", "readwrite");tx.objectStore("tasks").delete(id);tx.oncomplete = () => { log("delete", { id }); resolve(); };});};/* ===== 渲染 ===== */let editingId = null;const render = async () => {const tasks = await getTasks();tasks.sort((a, b) => {if (a.top && !b.top) return -1;if (!a.top && b.top) return 1;if (a.done && !b.done) return 1;if (!a.done && b.done) return -1;return new Date("1970/1/1 " + a.time) - new Date("1970/1/1 " + b.time);});const list = document.getElementById("list");list.innerHTML = "";tasks.forEach(t => {const div = document.createElement("div");div.className = "item" + (t.top ? " top" : "") + (t.done ? " done" : "") + (t.hidden ? " hidden" : "");div.innerHTML = `<div class="doneBtn" title="提前完成"></div><span class="name">${t.name}</span><span class="time">${t.time}</span><span class="ctrl"><button class="topBtn" title="置顶/取消置顶">${t.top ? "↓" : "↑"}</button><button class="hideBtn" title="隐藏/显示">${t.hidden ? "👁" : "🙈"}</button><button class="editBtn">✏️</button><button class="delBtn">❌</button></span>    `;list.appendChild(div);// 事件绑定div.querySelector(".doneBtn").onclick = () => toggleDone(t.id, !t.done);div.querySelector(".topBtn").onclick = () => toggleTop(t.id, !t.top);div.querySelector(".hideBtn").onclick = () => toggleHide(t.id, !t.hidden);div.querySelector(".editBtn").onclick = () => openEdit(t);div.querySelector(".delBtn").onclick = () => del(t.id);});};const toggleDone = (id, val) => updateTask(id, { done: val }).then(render);const toggleTop = (id, val) => updateTask(id, { top: val }).then(render);const toggleHide = (id, val) => updateTask(id, { hidden: val }).then(render);const openEdit = (task) => {editingId = task.id;document.getElementById("editName").value = task.name;document.getElementById("editTime").value = task.time;document.getElementById("editModal").style.display = "flex";};const closeEdit = () => {editingId = null;document.getElementById("editModal").style.display = "none";};document.getElementById("saveEdit").onclick = () => {if (!editingId) return;updateTask(editingId, {name: document.getElementById("editName").value,time: document.getElementById("editTime").value}).then(() => { render(); closeEdit(); });};document.getElementById("cancelEdit").onclick = closeEdit;const del = (id) => {if (confirm("确定删除？")) deleteTask(id).then(render);};/* ===== 添加新任务 ===== */document.getElementById("addBtn").onclick = () => {const name = document.getElementById("newName").value.trim();const time = document.getElementById("newTime").value;if (!name) { alert("请输入任务名称"); return; }addTask(name, time).then(() => {document.getElementById("newName").value = "";render();});};/* ===== 置顶/最小化/拖动 ===== */let isPinned = false;document.getElementById("pinBtn").onclick = () => {isPinned = !isPinned;document.getElementById("taskWidget").style.zIndex = isPinned ? 10000 : 100;document.getElementById("pinBtn").textContent = isPinned ? "📍" : "📌";};let isMin = false;document.getElementById("minBtn").onclick = () => {isMin = !isMin;document.getElementById("list").style.display = isMin ? "none" : "block";document.querySelector(".add").style.display = isMin ? "none" : "block";document.getElementById("minBtn").textContent = isMin ? "▢" : "─";};let drag = false, offsetX, offsetY;document.getElementById("header").onmousedown = e => {drag = true;offsetX = e.clientX - document.getElementById("taskWidget").offsetLeft;offsetY = e.clientY - document.getElementById("taskWidget").offsetTop;};window.onmousemove = e => {if (!drag) return;document.getElementById("taskWidget").style.left = (e.clientX - offsetX) + "px";document.getElementById("taskWidget").style.top = (e.clientY - offsetY) + "px";};window.onmouseup = () => drag = false;/* ===== 启动 ===== */openDB().then(() => {render();// 定时刷新列表（秒级提醒用，可优化）setInterval(render, 30000);});</script > ';
		div.style.cssText = 'margin: 0; position: fixed; top: 100px; right: 10px; width: 360px; height: 400px; border: 1px solid #ccc; z-index: 9999; background: #fff;'
		document.body.appendChild(iframe);
	}

	// 2. 工具函数
	const todayStr = () => new Date().toISOString().slice(0, 10);
	const key = (date, time, url) => DONE_PREFIX + date + '_' + time + '_' + url;

	const isDone = (date, time, url) =>
		localStorage.getItem(key(date, time, url)) === '1';

	const markDone = (date, time, url) =>
		localStorage.setItem(key(date, time, url), '1');

	// 3. 午夜清理器：每天 00:00 把昨天的所有键清掉
	const setupCleaner = () => {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		tomorrow.setHours(0, 0, 0, 0);
		const msToMidnight = tomorrow - Date.now();
		setTimeout(() => {
			Object.keys(localStorage)
				.filter(k => k.startsWith(DONE_PREFIX))
				.forEach(k => localStorage.removeItem(k));
			setupCleaner(); // 继续下一轮
		}, msToMidnight);
	};

	// 4. 某个时间点触发：对每个 URL 各跑一次
	const triggerOnce = (timeStr) => {
		const date = todayStr();
		urls.forEach(url => {
			if (!isDone(date, timeStr, url)) {
				// 打开并附带上触发信息，便于页面脚本识别
				window.open(url);
				console.log(`triggerDate=${date}&triggerTime=${encodeURIComponent(timeStr)}`);
				markDone(date, timeStr, url); // 立即标记“已打开”，防止刷新重复
			}
		});
	};

	// 5. 安排所有时间点
	const scheduleAll = () => {
		const now = new Date();
		const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

		TIMES.forEach(tStr => {
			const [h, m] = tStr.split(':').map(Number);
			const target = new Date(today);
			target.setHours(h, m, 0, 0);

			if (now > target) target.setDate(target.getDate() + 1);

			const delay = target - now;
			setTimeout(() => {
				triggerOnce(tStr);
				// 递归安排下一天同一时间
				setTimeout(() => triggerOnce(tStr), 24 * 3600 * 1000);
			}, delay);
		});
	};

	// 6. 只让最外层窗口、且非被打开域名时跑调度
	const isTargetDomain = () => urls.some(u => location.href.startsWith(u.split('?')[0]));
	if (window.top === window && !isTargetDomain()) {
		addPromptBox();
		setupCleaner();
		scheduleAll();
	}
})();