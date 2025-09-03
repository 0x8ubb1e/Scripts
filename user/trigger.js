// ==UserScript==
// @name								trigger
// @namespace						http://tampermonkey.net/
// @version							1.1
// @description					每天多时间点分别触发多个URL，每个URL每次只打开一次
// @author							0x8ubb1e
// @match								*://*
// @match								*://*/*
// @match								*://*/*/*
// @icon								https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.com
// @grant								none
// ==/UserScript==

(function () {
	'use strict';

	// 1. 配置
	const urls = [
		"https://18comic.vip/user/kafka97083/daily",
		"https://www.wwlib.cn/index.php/wuwen",
		"https://acgfun.art/plugin.php?id=k_misign:sign"
	];

	const TIMES = ['00:00', '10:30', '13:00', "20:30"]; // 24h:mm
	const DONE_PREFIX = 'DUO_done_'; // localStorage 键前缀

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
		setupCleaner();
		scheduleAll();
	}
})();