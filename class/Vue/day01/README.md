# Vue 简介
- Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
- [官网地址](https://cn.vuejs.org/)
# 起步
```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
- [CDN地址](https://www.bootcdn.cn/vue/)
```html
<!--node开发环境使用的js版本-->
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.esm.js"></script>
<!--浏览器开发版本-->
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.esm.browser.js"></script>
<!--正式生产版本-->
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
<!--正式生产版本 压缩版-->
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
```
### mvvm框架
- m model 数据
- v view界面(模板)
- vm 桥接(对接) model和view之间的关联
- view 主要的工作就是处理 vm
- ![mvvm框架](https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=b7703022c23d70cf58f7a25f99b5ba65/562c11dfa9ec8a13ab6935fbfc03918fa0ecc0be.jpg)
# Vue指令集
指令名称|作用|备注
---|---|---
v-model|表单数据双向绑定|
v-for|循环|todo list
v-show|显示与隐藏|不会从dom移除元素display none;
v-if|显示与隐藏|从dom元素中移除
v-bind|绑定数据|单项绑定
v-on|事件绑定|
v-text|类似el.innerText| 和差值表达式表现一致
v-html|类似el.innerHtml|
v-class|类名|
v-style|原生style|
v-once|只绑定一次事件|
v-cloak|防闪烁|
v-pre||
v-else-if||
v-else||
1. v-model and v-bind
```html
<!-- 单向绑定  v-bind:绑定的变量是单向绑定-->
<!-- 当变量发生变化时更新view 模板 不能修改变量 -->
<!-- 简写语法 : 号代替 v-bind-->
<input type="text" v-bind:value="inputValue">
<br>
<input type="text" :value="inputValue">
<br>
<!-- 双向绑定 v-model 绑定的变量是向绑定-->
<!-- 双向绑定既可以获取变量又可以修改变量 -->
<input type="text" v-model="inputValue">
<br>
```
2. v-if and v-show
```html
<!-- 插值表达式以及指令里所引用的值都是data里的变量 -->
<!-- v-show指令里的值需要一个布尔值 -->
<!-- 当为true时元素显示  当为false时元素隐藏 -->
<!-- 原理使用css里的 dispaly 来完成 -->
<div style="width:300px;height:300px;background:red" v-show="show"></div>

<!-- v-if指令里的值需要一个布尔值 -->
<!-- 当为true时元素显示  当为false时元素隐藏 -->
<!-- 原理是从dom中添加和移除元素实现 -->
<div style="width:300px;height:300px;background:yellow" v-if="!show"></div>

<!-- 使用 display:none 去隐藏一个元素 会占用dom得到性能 如果数据过多 浏览器性能会变差 -->
<!-- 显示和隐藏使用频率较高的情况下使用 v-show  反之使用 v-if -->

<!-- 使用 v-on 给元素绑定事件 -->
<button type="button" v-on:click="show=!show">显示</button>

<ul>
    <li v-for="(item,index) in arr2" v-show="!true">{{index}}</li>
</ul>
```
# 样式处理
```html
<div class="chat">
    <div class="item" :class="{other: item.type == 'other'}" v-for="(item,index) in message">
        <div class="message">
            {{item.user}}说：{{item.content}}
        </div>
    </div>
</div>
```