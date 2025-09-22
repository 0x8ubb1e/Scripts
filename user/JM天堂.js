// ==UserScript==
// @name							JM天堂
// @namespace					https://18comic.vip/*
// @version						1.2.1
// @description				JM天堂每日签到，通过fetch判断点击是否有效
// @author						0x8ubb1e
// @match							https://18comic.ink/*
// @match							https://18comic.vip/*
// @match							https://jmcomic-zzz.one/*
// @match							https://jmcomic-zzz.org/*
// @match							https://jm18c-qwq.org/*
// @match							https://jm18c-qwq.club/*
// @match							https://jm18c-tin.club/*
// @match							https://jmcomic-wqw.org/*
// @match							https://jmcomic-din.club/*
// @match							https://jmcomic-din.org/*
// @icon							https://www.google.com/s2/favicons?sz=64&domain=18comic.vip
// @updateURL					https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/JM天堂.js
// @downloadURL				https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/JM天堂.js
// @grant							none
// ==/UserScript==

(function () {
	'use strict';

	async function login () {
		const today = new Date();
		const year = today.getFullYear();
		const month = today.getMonth() + 1; // getMonth()返回的月份是从0开始的，所以要加1
		const day = today.getDate();
		let daily_id = parseInt(`${year % 10}${month}`) + 1;
		// console.log(daily_id);
		console.log(`今天是 ${year}-${month}-${day}`); // 输出：2023-10-5

		// 開啟本月簽到
		let button = document.querySelector("#daily");
		let count = 1;
		if (button) {
			console.log(button);

			const popup = document.getElementById("bouns-popup");
			const bonus = document.querySelector(".login-bouns");
			while (!popup || !bonus) {
				console.log("Target elements '#bouns-popup' and '.login-bouns' not found");
				button.click();
				console.log(`click #daily times: ${count++}`);
			}
		}

		// 點擊簽到
		button = document.querySelector(".login-bouns");
		count = 1;
		if (button) {
			console.log(button);

			while (count < 10) {
				button.click();
				console.log(`click .login-bouns times: ${count++}`);

				// "https://18comic.vip/ajax/user_daily_sign" "POST" "daily_id=57&oldStep=2"
				const data = await fetch(`https://18comic.vip/ajax/user_daily_event?daily_id=${daily_id}`)
					.then(response => response.json());
				console.log(`fetch url https://18comic.vip/ajax/user_daily_event?daily_id=${daily_id}`);
				console.log(data);

				const dateArray = await data['dateArray'];
				const dateEvent = await data['dateEvent'];
				const dateMiss = await data['dateMiss'] || [];
				console.log(`dateArray:\n${dateArray}\ndateEvent:\n${dateEvent}\ndateMiss:\n${dateMiss}\n`);

				if (dateArray.includes(day)) break;
				console.log(day, dateArray, dateArray.includes(day));
			}
		}
		if (count == 10) {
			alert("簽到失敗！！！");
			return;
		}

		// 離開
		button = document.querySelector(".btn-secondary");
		count = 1;
		if (button) {
			console.log(button);
			button.click();
			console.log(`click .btn-secondary times: ${count++}`);
		}

		alert('今日已签到！\n')
	}

	// const url = "https://18comic.vip/user/*/daily";
	// if (window.location.href === url) {
	const path = location.pathname;
	if (/^\/user\/[^/]+\/profile$/.test(path)) {
		login();
	}
})();