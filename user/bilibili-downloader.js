// ==UserScript==
// @name							bilibili-downloader
// @namespace					http://tampermonkey.net/
// @version						1.1.0
// @description				解析bilibili视频下载链接，复制到剪贴板，粘贴到解析网站即可
// @author						0x8ubb1e
// @match							https://www.bilibili.com/video/*
// @match							https://snapany.com/zh/bilibili*
// @icon							https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @updateURL					https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/bilibili-downloader.js
// @downloadURL				https://raw.githubusercontent.com/0x8ubb1e/Scripts/refs/heads/main/user/bilibili-downloader.js
// @grant							none
// ==/UserScript==

(function () {
	'use strict';

	const href = location.href;

	/* B站：https://www.bilibili.com/video/任意 */
	const p1 = /^https:\/\/www\.bilibili\.com\/video\//.test(href);
	const p2 = /^https:\/\/snapany\.com\/zh\/bilibili(?:[?#].*)?$/i.test(href);
	console.log(href, p1, p2);
	if (p1) {
		const host = document.createElement('div');
		host.style.cssText =
			'position: fixed; top: 200px; right: 20px; z-index: 214748364333337; ' +
			'width: 80px; height: 80px; border-radius: 50%; background: #1890ff; ' +
			'color: #fff; display: flex; align-items: center; justify-content: center; ' +
			'cursor: pointer; font-size: 24px; box-shadow: 0 2px 8px rgba(0,0,0,.2); ';
		host.textContent = '解析';
		document.documentElement.appendChild(host);

		host.onclick = () => {
			window.open(
				'https://snapany.com/zh/bilibili?from=' + encodeURIComponent(location.href),
				'_blank'
			);
		};
	}

	/* 解析网站：https://snapany.com/zh/bilibili */
	if (p2) {
		/* 1. 读一次性数据 */
		const url = new URL(location.href);
		const from = url.searchParams.get('from'); // 可能为 null
		console.log(`${url}\n${from}`);

		/* 2. 立刻去掉 from 参数，但保持页面不刷新 */
		url.searchParams.delete('from');
		window.history.replaceState(null, '', url.href);

		// 3. 复制到剪贴板
		if (navigator.clipboard && window.isSecureContext) {
			navigator.clipboard.writeText(from).then(() => {
				console.log('已复制到剪贴板 ✅');
			}).catch(err => {
				console.error('复制失败:', err);
			});
		}

		/* 3. 把值填到页面（或做其它逻辑） */
		// const input = document.querySelector('body>main>section>div> div > div.flex.w-full.max-w-3xl.pt-8.sm\:flex-row.flex-col.gap-y-4 > div > div > div > input');
		const input = document.evaluate(
			'/html/body/main/section/div/div/div[2]/div/div/div/input',
			document,
			null,
			XPathResult.FIRST_ORDERED_NODE_TYPE,
			null
		).singleNodeValue;
		console.log(input);

		setTimeout(() => {
			if (from) {
				input.value = decodeURIComponent(from);
			} else {
				input.value = '未检测到来源地址';
			}
			console.log(input.value);

			const button = document.evaluate(
				'/html/body/main/section/div/div/div[2]/button/span',
				document,
				null,
				XPathResult.FIRST_ORDERED_NODE_TYPE,
				null
			).singleNodeValue;
			button.click();
		}, 500);
	}
})();