# 📌 AI Todo List

一个使用 React + Vite + localStorage 从零构建的 Todo List 应用。本项目在 AI 辅助下完成，用于课程期末作业。

---

## 🚀 本地运行

### 1. 进入项目目录

```bash
cd todo-list-ai
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动项目

```bash
npm run dev
```

然后在浏览器打开：

```text
http://localhost:5173
```

---

## ✨ 功能说明

该 Todo List 支持以下功能：

### ✅ 基础功能

- 添加 Todo
- 删除 Todo
- 编辑 Todo（双击文本）
- 勾选完成 / 取消完成

### 💾 数据持久化

- 使用 localStorage 保存数据
- 刷新页面后数据不会丢失

---

## 🧠 AI 帮我跨过的最大坑

在开发过程中，最大的困难是：

> 如何让 React 的状态与 localStorage 保持同步，同时避免数据覆盖或无限渲染问题。

一开始我尝试在每次渲染时直接写入 localStorage，导致状态异常。后来在 AI 的帮助下，改为：

- 初始化时从 localStorage 读取数据
- 使用 useEffect 监听 todos 变化
- 将数据更新逻辑集中管理在状态层

最终实现了稳定的数据持久化方案。

---

## 🧱 技术栈

- React
- Vite
- JavaScript (ES6+)
- localStorage
- CSS

---

## 📂 项目结构

```text
src/
  components/
    TodoInput.jsx
    TodoItem.jsx
  App.jsx
  App.css
  main.jsx
```

---

## 🎯 项目目标

本项目目标是：

- 从 0 开始构建一个完整可运行前端项目
- 使用 AI 辅助完成开发
- 掌握 React 基础状态管理与组件拆分
- 理解前端数据持久化方式
## 🖥️ 项目截图
![screenshot](/todo-list-ai/screenshot.png)

---


