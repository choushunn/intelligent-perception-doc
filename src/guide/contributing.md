---
title: 参与贡献
order: 2
---

## 依赖环境
在开始之前，请确保已下载并安装 [Node.js](https://nodejs.org/)。
- [Node.js v16.19.0+](https://nodejs.org/)
## Fork 原始项目
1. 打开[本项目](https://github.com/choushunn/intelligent-perception-doc).
2. 点击页面右上角的 "Fork" 按钮。这将在您的GitHub账号下创建一个仓库的副本。

## 安装
```bash
# 克隆项目
git clone https://github.com/your-username/intelligent-perception-doc
# 将 `your-username` 替换为您的 GitHub 用户名。

# 进入项目所在目录
cd intelligent-perception-doc

# 创建并切换到一个新的分支
git checkout -b <branch_name>

# 安装 pnpm 包管理器
npm i pnpm -g

# 设置 pnpm 的镜像源为淘宝镜像
pnpm config set registry http://registry.npm.taobao.org

# 安装项目所需的依赖项
pnpm install
```

## 运行

```bash
# 运行项目
pnpm run docs:dev
```

## 参与贡献

如果您是一个新手并且不熟悉 Markdown，请先阅读以下文档：
- [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 
- [Markdown 增强](https://plugin-md-enhance.vuejs.press/zh/)
- [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。

## 项目结构
```bash
# 项目目录结构
intelligent-perception-doc   # 项目根目录
└─src                        # 代码目录
   ├─guide                   # 指北目录
   ├─more                    # 了解更多目录
   ├─resources               # 常用资源目录
   └─technology              # 必修课目录
      ├─ai
      ├─deployment
      ├─development
      └─embedded
```

在新分支上进行修改并提交更改：

```bash
# 将修改的文件添加到暂存区
git add .

# 提交修改
git commit -m "添加了新的代码"

# 推送到远程仓库
git push origin <branch_name>
```
## 建议阅读
另外，建议您阅读以下相关项目，以更好地理解本项目的构建方式：
- [VuePress](https://v2.vuepress.vuejs.org/zh/)
- [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)
- [Markdown 增强](https://plugin-md-enhance.vuejs.press/zh/)