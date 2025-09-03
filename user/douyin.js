// ==UserScript==
// @name						douyin
// @namespace				http://tampermonkey.net/
// @version					1.0
// @description			抖音自动关注，点击进入主页自动关注
// @author					0x8ubb1e
// @match						https://www.douyin.com/user/*
// @icon						https://www.google.com/s2/favicons?sz=64&domain=douyin.com
// @grant						none
// ==/UserScript==

(function () {
	'use strict';

	var xpath = '//*[@id="user_detail_element"]/div/div[2]/div[3]/div[2]/button[2]';

	// 使用document.evaluate
	// var result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	var button = result.singleNodeValue; // 获取第一个匹配的节点
	console.log(button);

	if (button) {
		button.click();
	} else {
		console.log('Button not found');
	}
	// 遍历结果
	/* for (var i = 0; i < result.snapshotLength; i++) {
		var node = result.snapshotItem(i);
		console.log(node); // 输出每个<div>元素
	}*/
})();