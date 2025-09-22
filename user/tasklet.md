# Tasklet v0.0

### 项目名取自 Task + Reminder + Widget，简洁三合一：任务提醒小挂件）

### 项目描述：

每日任务提示的软件，要求可以实现新增任务，设置时间，定时提醒等功能，然后能够调整窗体位置、实现置顶或者附着在桌面上

### 使用说明

这是一个功能完整的每日任务提醒软件，以HTML文件形式提供，可直接在浏览器中打开使用。

### 主要功能：

* 添加任务：输入任务名称和设定时间，点击"添加任务"按钮即可

* 定时提醒：到达设定时间时会显示通知提醒

* 任务管理：可以删除已完成的任务

* 位置调整：可拖动窗口到任意位置，位置会自动保存

* 窗口置顶：点击图钉图标可切换置顶状态

* 最小化/还原：可以最小化窗口，只显示标题栏

### 使用方法：

* 将代码保存为 Tasklet.html，直接双击即可运行。

	* 将代码保存为HTML文件（如task-reminder.html）

	* 在浏览器中打开此文件

	* 输入任务名称和设定时间

	* 点击"添加任务"即可设置提醒

	* 任务提醒支持浏览器通知（需授权）

* 在其它页面引用：
  
	```html
	<iframe src="Tasklet.html" style="position: fixed; right: 0; top: 100px; width: 300px; height: 400px; border: none; z-index: 9999"></iframe>
	<iframe src="file:///F:/Code/Project/Tasklet/1.0/Tasklet.html" style="position: fixed; right: 0; top: 100px; width: 300px; height: 400px; border: none; z-index: 9999"></iframe>
	```

### 数据存储：

* 所有任务数据保存在浏览器本地存储中，关闭页面后数据不会丢失

* 窗口位置和置顶状态也会被记住

### 注意事项：

* 需要保持浏览器打开才能接收提醒

* 部分浏览器可能需要允许通知权限

* 支持Chrome、Edge、Firefox等现代浏览器
