// ==UserScript==
// @name						无问AI
// @namespace				http://tampermonkey.net/
// @version					1.0
// @description			无问AI社区每日签到
// @author					0x8ubb1e
// @match						https://www.wwlib.cn/index.php/wuwen
// @icon						https://www.google.com/s2/favicons?sz=64&domain=wwlib.cn
// @grant						none
// ==/UserScript==

(function () {
	'use strict';

	if (window.location.href === "https://www.wwlib.cn/index.php/wuwen") {
		let button = document.querySelector('#signInButton');
		button.style.display = "block";
		console.log(button);
		button.click();

		button = document.querySelector("#signinModal");
		if (button) {
			console.log(button);

			button = button.querySelector("#checkInBtn");
			console.log(button);
			button.click();
		}
	}
})();