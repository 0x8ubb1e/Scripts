// ==UserScript==
// @name							URL & Base64 编解码工具
// @namespace					http://tampermonkey.net/
// @version						1.2
// @description				当前页面URL编解码和Base64编解码工具
// @author						0x8ubb1e
// @match							*://*/*
// @grant							none
// ==/UserScript==

(function () {
	'use strict';

	// 创建浮动面板
	const panel = createPanel();
	let currentURL = window.location.href;
	let isDragEnabled = true;
	let isMinimized = false;

	function createPanel () {
		const panel = document.createElement('div');
		panel.style.cssText = `
			position: fixed;
			top: 20px;
			right: 20px;
			z-index: 9999;
			background: white;
			padding: 15px;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0 2px 10px rgba(0,0,0,0.1);
			min-width: 300px;
		`;
		return panel;
	}

	// 标题栏
	const header = document.createElement('div');
	header.style.cssText = `
		display: flex;
		justify-content: flex-end;
		gap: 5px;
		margin-bottom: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #eee;
	`;

	// 标题栏按钮
	function createHeaderButton (text, onClick) {
		const btn = document.createElement('button');
		btn.textContent = text;
		btn.onclick = onClick;
		btn.style.cssText = `
			padding: 2px 8px;
			cursor: pointer;
			background: transparent;
			border: 1px solid #ddd;
			border-radius: 3px;
			font-size: 12px;
			line-height: 1;
			transition: all 0.2s;
		`;
		btn.onmouseenter = () => btn.style.backgroundColor = '#f5f5f5';
		btn.onmouseleave = () => btn.style.backgroundColor = 'transparent';
		return btn;
	}

	// 最小化按钮
	const minimizeBtn = createHeaderButton('－', () => {
		isMinimized = !isMinimized;
		content.style.display = isMinimized ? 'none' : 'block';
		minimizeBtn.textContent = isMinimized ? '＋' : '－';
		minimizeBtn.title = isMinimized ? '展开面板' : '最小化面板';
	});

	// 拖动锁定按钮
	const dragLockBtn = createHeaderButton('🔓', () => {
		isDragEnabled = !isDragEnabled;
		dragLockBtn.textContent = isDragEnabled ? '🔓' : '🔒';
		dragLockBtn.title = isDragEnabled ? '锁定位置' : '解锁位置';
		dragLockBtn.style.color = isDragEnabled ? '#666' : '#ff4444';
	});

	// 关闭按钮
	const closeBtn = createHeaderButton('×', () => panel.remove());
	closeBtn.style.color = '#ff4444';
	closeBtn.style.borderColor = '#ffcccc';
	closeBtn.title = '关闭面板';

	header.appendChild(minimizeBtn);
	header.appendChild(dragLockBtn);
	header.appendChild(closeBtn);

	// 内容区域
	const content = document.createElement('div');

	// 输入框
	const input = document.createElement('textarea');
	input.value = currentURL;
	input.style.cssText = `
		width: 100%;
		height: 60px;
		margin-bottom: 10px;
		padding: 5px;
		box-sizing: border-box;
		font-family: monospace;
		font-size: 13px;
	`;

	// 功能按钮容器
	const btnContainer = document.createElement('div');
	btnContainer.style.cssText = `
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
	`;

	// 创建功能按钮
	function createButton (text, onClick, color = '#f0f0f0', textColor = '#333') {
		const btn = document.createElement('button');
		btn.textContent = text;
		btn.onclick = onClick;
		btn.style.cssText = `
			padding: 5px 10px;
			cursor: pointer;
			background: ${color};
			border: 1px solid ${color === '#f0f0f0' ? '#ccc' : color};
			border-radius: 3px;
			flex: 1;
			min-width: 80px;
			color: ${textColor};
			transition: opacity 0.2s;
		`;
		btn.onmouseenter = () => btn.style.opacity = '0.8';
		btn.onmouseleave = () => btn.style.opacity = '1';
		return btn;
	}

	// 添加功能按钮
	btnContainer.appendChild(createButton('获取网址', () => {
		currentURL = window.location.href;
		input.value = currentURL;
	}, '#2196F3', 'white'));

	btnContainer.appendChild(createButton('URL编码', () => {
		input.value = encodeURIComponent(input.value);
	}));

	btnContainer.appendChild(createButton('URL解码', () => {
		try {
			input.value = decodeURIComponent(input.value);
		} catch (e) {
			alert('解码错误: 无效的URL编码');
		}
	}));

	btnContainer.appendChild(createButton('Base64编码', () => {
		input.value = btoa(unescape(encodeURIComponent(input.value)));
	}));

	btnContainer.appendChild(createButton('Base64解码', () => {
		try {
			input.value = decodeURIComponent(escape(atob(input.value)));
		} catch (e) {
			alert('解码错误: 无效的Base64字符串');
		}
	}));

	btnContainer.appendChild(createButton('复制结果', () => {
		input.select();
		document.execCommand('copy');
	}, '#4CAF50', 'white'));

	// 组装内容区域
	content.appendChild(input);
	content.appendChild(btnContainer);

	// 组装面板
	panel.appendChild(header);
	panel.appendChild(content);
	document.body.appendChild(panel);

	// 实时更新URL
	input.addEventListener('blur', () => {
		if (input.value !== currentURL) {
			currentURL = window.location.href;
		}
	});

	// 可拖动功能
	makeDraggable(panel);

	function makeDraggable (element) {
		let isDragging = false;
		let offset = [0, 0];

		element.onmousedown = function (e) {
			if (!isDragEnabled) return;
			if (e.target.tagName !== 'BUTTON') {
				isDragging = true;
				offset = [
					element.offsetLeft - e.clientX,
					element.offsetTop - e.clientY
				];
			}
		};

		document.onmouseup = () => isDragging = false;
		document.onmousemove = (e) => {
			e.preventDefault();
			if (isDragging && isDragEnabled) {
				element.style.left = (e.clientX + offset[0]) + 'px';
				element.style.top = (e.clientY + offset[1]) + 'px';
			}
		};
	}
})();