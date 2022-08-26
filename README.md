<p align="center">
  <a href="https://open.imdodo.com">
    <img src="https://avatars.githubusercontent.com/u/96616694" width="200" height="200" alt="dodo-open">
  </a>
</p>

<div align="center">

  # dodo-open-docs

  _✨ 本文档项目基于 [VuePress](https://v2.vuepress.vuejs.org/zh/) 框架，以 [Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html) 作为编写规范，简单易上手✨_

  <a href="https://github.com/dodo-open/dodo-open-docs/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/dodo-open/dodo-open-docs" alt="license">
  </a>
  <a href="https://github.com/dodo-open/dodo-open-docs/releases">
    <img src="https://img.shields.io/github/v/release/dodo-open/dodo-open-docs?color=blueviolet&include_prereleases"
      alt="release">
  </a>

</div>

## 项目介绍

本文档项目服务于DoDo开放平台，对应文档站点为<https://open.imdodo.com>，文档内容或有欠缺，诚邀各位开发者们共同参与编写补充。

## 云端修改

对于非专业用户，打开 [开放平台文档](https://open.imdodo.com)，找到你想要的编辑的页面，然后点击页面左下角`在 GitHub 上编辑此页`链接，直接在线编辑，保存后提PR即可！

## 本地修改

对于专业开发者，可克隆代码到本地进行修改，然后推送到云端

- **安装开发工具**

安装 VSCode、NodeJS、Git

- **初始化项目**

克隆代码

```bash
git clone -b dev https://github.com/dodo-open/dodo-open-docs.git
```

进入项目

```bash
cd /dodo-open-docs
```

安装yarn

```bash
npm install -g yarn
```

初始化依赖

```bash
yarn
```

- **调试项目**

```bash
yarn dev
```

- **文档结构**

```
docs
├── .vuepress/    # Vuepress相关文件
│   └── config.ts # 文档配置
├── go/           # 平台介绍 & 运营规范
├── dev/          # 开发文档
│   ├── start/    # 开发流程
│   ├── api/      # 接口文档
│   ├── event/    # 事件文档
│   └── sdk/      # SDK文档
├── log/          # 开放平台日志
└── README.md     # 首页文档
```

- **提交代码**

确认文档修改无误后即可推送PR到云端，待管理员同步更新到开放平台即可。
