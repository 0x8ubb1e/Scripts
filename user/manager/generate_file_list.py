import os
import json

# 自动设置当前工作目录为脚本所在路径
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)
print(f'work_path:{script_dir}')

# 设置扫描路径
# path = script_dir
path = r'F:\offers\HUAWEI\25年最新华为od题库'
html_files = []
for root, dirs, files in os.walk(path):
	for file in files:
		if file.lower().endswith('.html') and file != 'manager.html':
			full_path = os.path.join(root, file).replace('\\', '/')
			html_files.append(full_path)

with open('file_list.json', 'w', encoding='utf-8') as f:
	json.dump(html_files, f, ensure_ascii=False, indent=2)

print(f"扫描完成，共找到 {len(html_files)} 个 .html 文件，已保存为 file_list.json")