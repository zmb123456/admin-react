# admin-react

---

## 实例

![](https://zos.alipayobjects.com/rmsportal/TTznIRNZINxGJaa.gif)

## 本示例安装使用

```bash
$ npm install
$ npm start
```

## 介绍

使用dvantd工具(基于 dva 和 antd 的脚手架安装工具) 的一个后台小示例;

## 具体操作简介

下载安装

```
  $npm install dvantd-cli -g  --下载dvantd安装工具

```
创建项目 --有两种创建方式(dvantd init和 dvantd new myApp)

dvantd init

```
$ mkdir myApp && cd myApp   创建并转到文件夹
$ dvantd init               无参数 默认安装 dva 和 antd 并搭建脚手架
$ dvantd init --demo        加参数 --demo 同上并安装 demo

```

dvantd new

```
$ dvantd new myApp          直接创建工程文件并安装 dva 和 antd 脚手架
$ dvantd new myApp --demo   同上并安装demo

```

npm start

```
$ cd myApp  
$ npm start                 启动本地端口并打开 demo (默认chrome浏览器)

```

[更多的内容请移步dvantd官网](https://github.com/longlongago2/dvantd-cli)


## 项目示例

```
.
├── /mock/           # 数据mock的接口文件
├── /src/            # 项目源码目录
│ ├── /components/   # 项目组件
│ ├── /routes/       # 路由组件（页面维度）
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /utils/        # 工具函数
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ ├── index.less     
│ └── index.html     
├── package.json     # 项目信息
└── proxy.config.js  # 数据mock配置

```

[项目例子详细步骤请移步dva-docs](https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/01-%E6%A6%82%E8%A6%81.md)

在这里我强调一下,model写完之后一定要在入口文件注册一下,不然会向我一样坑了一天没找到问题（前车之鉴）
