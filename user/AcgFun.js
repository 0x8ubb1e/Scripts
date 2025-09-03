// ==UserScript==
// @name						AcgFun
// @namespace				http://tampermonkey.net/
// @version					1.0
// @description			AcgFun论坛每日签到
// @author					0x8ubb1e
// @match						https://acgfun.moe/*
// @match						https://acgfun.art/*
// @icon						https://www.google.com/s2/favicons?sz=64&domain=acgfun.moe
// @grant						none
// ==/UserScript==

(function () {
	'use strict';

	function login () {
		const page = document.querySelector("#fwin_login");
		if (page) {
			console.log(page);
			let button = page.querySelector(".lg_post");
			console.log(button);
			button.click();
		}

		let button = document.querySelector("#JD_sign");
		if (button) {
			console.log(button);
			button.click();
		} else {
			button = document.querySelector(".btnvisted");
			console.log(button);
			button.click();
		}
	}

	function collect () {
		var button = document.createElement("button"); // 创建按钮元素
		button.innerHTML = "收藏"; // 设置按钮的文本
		button.id = "myButton"; // 设置按钮的ID（可选）
		button.style = "position: fixed; top: 250px; right: 200px; z-index: 100; border-raidus: 5px; background: #77a3e5; font-size:20px; color: #fff"; // 设置按钮样式

		button.onclick = function () { // 为按钮添加点击事件监听器
			// alert("按钮被点击了！");
			document.querySelector("#k_favorite").click();
		};

		document.body.appendChild(button); // 将按钮添加到body元素中
	}

	// if (window.location.href === "https://acgfun.moe/plugin.php?id=k_misign:sign") {
	if (window.location.href === "https://acgfun.art/plugin.php?id=k_misign:sign") { // 签到
		login();
		// } else if (window.location.href.startsWith("https://acgfun.moe/thread-")) {
	} else if (window.location.href.startsWith("https://acgfun.art/thread-")) { // 快捷收藏
		collect();
	}
})();