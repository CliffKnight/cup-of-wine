# web developer 

## 简述

要换工作，需要梳理一下技能。  

web 开发， 包含：

全部：前端、web 服务端（大部分情况下是node 或者 Python）；
部分：网络、安全、数据库、运维。
编程思想；

之前写过一个类似的 xmind 不是很好，但是可以用来参考。

![web技能总结草纸版](http://tva1.sinaimg.cn/large/007X8olVly1g71c2448vsj31aq0u019w.jpg)

## 枚举列表

列表形式以及部分关键字

* 前端
  * html
    * [ ] html 标签语义化的理解。
    * [ ] 离线存储
    * [ ] cookie / sessionStorage / localStorage 区别
    * [ ] 一些特殊的 meta 标签： 例如viewport 
    * [ ] preload prefetch preconnect （也属于性能优化）
  * js
    * 变量
    * 类型
    * 原型链
    * 作用域&闭包  （相关考题很多）
    * 执行机制
    * 语法
    * 各类api
  * css
    * 盒模型
    * BFC
    * 居中布局 flex
* 服务端
  * node
    * 中间件原理https://juejin.im/post/5a5f5a126fb9a01cb0495b4c
    * koa 库基本使用
* 网络
    * http https http2.0
    * dns
* 安全
    * XSS
    * CSRF
* 运维
    * docker
* 数据库
* 工程化
    * 自动集成
    * 打包工具
    * 发布方式
    * require & import 区别
* 框架
* 浏览器
  * 跨域
* 与原生app结合
* 业务轮子
    * 实现前端监控   window.onerror; error event listerner;
    * 实现埋点  document.addEventListener('mouseDown') DOMContentLoaded scroll https://mlog.club/article/24937
    * 实现和app交互 bridge  webview 可以获取并连接h5发出的请求、自定义协议、传递函数实现回调或者添加事件监听
* js 轮子 
  * Promise 手写
  * 迭代器生成器 手写生成器
  * async await 底层原理
  * bind call的实现
  * 如何获取对象的原型
* 其他

## 常见面试题

### html

#### 1.html 标签语义化的理解

  1. 在样式丢失时会有清晰的结构
  2. 有利于 seo 爬虫抓取
  3. 方面其他设备解析
  4. 便于团队协作、维护

#### 2.html 如何做离线存储。（前端性能优化的一环）

  可以在 html 头部添加 manifest='cache.manifest' 属性。

#### 3.cookie sessionStorage localStorage区别

  1. cookies是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http请求中携带，即cookies在浏览器和服务器间来回传递，而sessionstorage和localstorage不会自动把数据发给服务器，仅在本地保存。
  2. 存储大小的限制不同。cookie保存的数据很小，不能超过4k，而sessionstorage和localstorage保存的数据大，可达到5M。
  3. 数据的有效期不同。cookie在设置的cookie过期时间之前一直有效，即使窗口或者浏览器关闭。sessionstorage仅在浏览器窗口关闭之前有效。localstorage始终有效，窗口和浏览器关闭也一直保存，用作长久数据保存。
  4. 作用域不同。cookie在所有的同源窗口都是共享；sessionstorage不在不同的浏览器共享，即使同一页面；localstorage在所有同源窗口都是共享

### ES6

#### 1. require 和 import 的区别

  1. require 是 commonJs 规范，输出的是值的拷贝，也就是说 modules.exports 输出后在改变原模块内容不会对 require 的造成影响。
  2. export 输出的是值的引用。
  3. 待整理...