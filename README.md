# lazy-studio.com Personal HomePage.
=======

个人的长期实例项目，主要为学习和练习，本实例采用 Vue+NodeJS+KOA2+MonGoDB+WebPack 全家桶
------

## 目录

```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── assets                 // 字体图标等静态资源
│   ├── components             // 组件
│   ├── api                    // 接口
│   ├── router                 // 路由
│   ├── store                  // vuex
│   ├── style                  // 样式
│   ├── utils                  // 公用方法
│   ├── view                   // 页面视图
│   ├── vuex                   // vuex
│   ├── theme                  // elementUI 主题库
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口加载组件 初始化等
├── static                     // 静态资源
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
├── package.json               // package.json
├── element-variables.scss     // elementUI 公共样式	
└── webpack.config             // webpack 配置

```

## 基本页面功能

```
Design -> PS 这个页面主要是展示一切PS技术，合成、调色、制作UI、网页设计、字体设计等等。
Design -> AI 主要是使用Illustartor制作矢量图形。
Design -> 3D 3D简单一点的建模我使用的是C4D，后期复杂一些建模打算使用Zbrush刻画。
Design -> PhotoGR 使用 water-fall-easy 组件，但是部份功能不是很符合我的预期，修改本来的点击中<br/>				  转到link事件为展开大图。
Design -> CG 展示的是手绘的能力。

FE2    -> Vue 使用Markdown 的页面实例。
FE2    -> Mock 前后端分离，模拟后端实现数据交互。
FE2    -> SCSS 记录一些SCSS应用的实例技巧等等。
FE2    -> JS JavaScript的之类的实例技巧。

Animation 展示的是各种技术栈制作的动画。

NodeJS -> 自定义利用组件、父子组件通信的理解v1.1.0版本为简单实现父子通信，但是LI无法根据数据自<br/>
		  动追加，所以修改版本为现在的版本，实现了LI根据数据追加，但是代码和数据冗余，下个版本修改。

Template 一切模仿学习的、自己实验的网站

Link     友情链接

Blog     博客

Update   更新以及预计更新的一些记录
```


## 技术研究及实现

* 改版过的瀑布流，使用water-fall-easy为原型。                                             -- 已完成
* 父子组件通信及复用。                                                                    -- 已完成
* Mock 前后端分离，模拟后端实现数据交互。                                                 -- 正在完成
* Axios拦截。                                                                             -- 下个版本完成
* Token权限分配。                                                                         -- 下个版本完成