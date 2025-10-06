#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
一键生成「HTML 文件浏览器」独立页面
string.Template 版，HTML 已格式化
"""
import os
import json
import webbrowser
from string import Template

# 自动设置当前工作目录为脚本所在路径
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)
print(f'work_path:{script_dir}')

# 设置扫描路径
path = script_dir

# ---------- 1. 递归扫描 ----------
html_files = []
for root, dirs, files in os.walk(path):
	for file in files:
		if file.lower().endswith('.html') and file != 'html_browser.py':
			rel = os.path.join(root, file).replace('\\', '/')
			if rel.startswith('./'):
				rel = rel[2:]
			html_files.append(rel)

# ---------- 2. 模板 ----------
HTML_TMPL = Template('''<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
	<meta name="version" content="5.0" />
  <title>HTML 文件浏览器</title>
  <style>
    body { font-family: sans-serif; padding: 2em; }
    button { margin: .5em; padding: .5em 1em; font-size: 1em; }
    #info { margin-top: 1em; font-size: 1.2em; }
  </style>
</head>

<body>
  <h1>HTML 文件浏览器</h1>
  <button onclick="start('seq')">顺序浏览</button>
  <button onclick="start('rand')">随机浏览</button>
  <button onclick="reset()">重置进度</button>
  <button onclick="exportList()">导出已看列表</button>
  <div id="info">共 $total 个文件</div>

  <script>
    const ALL = $jsonArr;
    const KEY = 'viewed';
    let queue = [];

    /* -------- 工具函数 -------- */
    function getViewed() {
      try {
        return JSON.parse(localStorage.getItem(KEY) || '[]');
      } catch {
        return [];
      }
    }

    function saveViewed(file) {
      const v = getViewed();
      if (!v.includes(file)) {
        v.push(file);
        localStorage.setItem(KEY, JSON.stringify(v));
      }
    }

    function reset() {
      if (confirm('重置进度？')) {
        localStorage.removeItem(KEY);
        location.reload();
      }
    }

    function exportList() {
      const blob = new Blob([JSON.stringify(getViewed(), null, 2)], {type: 'application/json'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'viewed.json';
      a.click();
    }

    function update() {
      const viewed = getViewed().length;
      document.getElementById('info').textContent =
        `已看：$${viewed} / 总计：$${ALL.length}，剩余：$${ALL.length - viewed}`; <!-- 这里 $$ 转义 -->
    }

    /* -------- 主流程 -------- */
    function start(mode) {
      const unseen = ALL.filter(f => !getViewed().includes(f));
      if (!unseen.length) {
        alert('全部浏览完成！');
        return;
      }
      queue = mode === 'rand' ? unseen.sort(() => Math.random() - 0.5) : unseen;
      next();
    }

    function next() {
      if (!queue.length) {
        alert('本轮完成！');
        return;
      }
      const file = queue.shift();
      const win = window.open(file, '_blank');
      if (!win) {
        alert('请允许弹出窗口');
        return;
      }
      saveViewed(file);
      update();
      const timer = setInterval(() => {
        if (win.closed) {
          clearInterval(timer);
          next();
        }
      }, 1000);
    }

    /* -------- 初始化 -------- */
    update();
  </script>

</body>
</html>''')

# ---------- 3. 渲染 ----------
html_doc = HTML_TMPL.substitute(
	total=len(html_files),
	jsonArr=json.dumps(html_files, ensure_ascii=False)
)

# ---------- 4. 写出并打开 ----------
with open('manager.html', 'w', encoding='utf-8') as f:
	f.write(html_doc)

print(f'✅ 生成成功！共 {len(html_files)} 个文件。正在打开浏览器……')
webbrowser.open('manager.html')