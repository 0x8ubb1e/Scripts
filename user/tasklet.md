# Tasklet v1.0
（取自 Task + Reminder + Widget，简洁三合一：任务提醒小挂件）

### 功能特性：

* 轻量级，无第三方库依赖

* 所有业务逻辑封装在 Tasklet 全局对象内，插入任意页面只需 <script src="Tasklet.html"></script>

* 数据全部进入 IndexedDB（含操作日志）

* 离线可用，刷新不丢数据

### 功能更新：

* 添加任务时，添加新增时间，方便后续做数据统计

* 添加任务修改功能，比如任务名、时间等

* 添加任务置顶功能和隐藏功能，隐藏用删除线表示，并置于tasklist末尾

* 在任务名前添加任务提前完成按钮，点击以后任务暂时置于未完成任务末尾，且到任务提醒时间不提醒

* 对项目进行打包，方便后续插入到具体的页面中，进行提示

* 所有新增任务、修改任务、删除任务、任务提前完成、任务提醒等操作，形成日志，记入在indexdb或者持久化存储

### 使用说明

* 将代码保存为 Tasklet.html，直接双击即可运行。

* 在其它页面引用：
  
	```html
	<iframe src="Tasklet.html" style="position: fixed; right: 0; top: 100px; width: 300px; height: 400px; border: none; z-index: 9999"></iframe>
	<iframe src="file:///F:/Code/Project/Tasklet/1.0/Tasklet.html" style="position: fixed; right: 0; top: 100px; width: 300px; height: 400px; border: none; z-index: 9999"></iframe>
	```