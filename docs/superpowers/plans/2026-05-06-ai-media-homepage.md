# AI × 传媒变革 首页实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成 AI × 传媒变革首页的生产级优化，包括代码结构整理、SEO/可访问性增强、交互优化，以及详情页扩展模板准备。

**Architecture:** 纯 HTML + CSS 静态页面。当前 `index.html` 已包含完整的首页内容和内联 CSS。计划将 CSS 提取到独立文件以提升可维护性，同时添加 SEO、可访问性和交互增强。

**Tech Stack:** HTML5, CSS3（Flexbox, CSS Custom Properties, transitions, @keyframes）

---

### Task 1: 分离 CSS 到独立文件

**Files:**
- Create: `styles.css`
- Modify: `index.html`（移除 `<style>` 标签，改为 `<link>` 引用）

- [ ] **Step 1: 创建 `styles.css`，将 `index.html` 中 `<style>` 标签内的全部 CSS 复制过去**

- [ ] **Step 2: 修改 `index.html`，替换 `<style>` 为外部引用**

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 正在重塑传媒行业</title>
  <link rel="stylesheet" href="styles.css">
</head>
```

- [ ] **Step 3: 浏览器验证 — 页面样式与分离前完全一致，无 404 错误**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "refactor: extract inline CSS to external styles.css"
```

---

### Task 2: SEO 与可访问性优化

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 在 `<head>` 中添加 SEO meta 标签**

```html
<meta name="description" content="探索AI如何重塑传媒行业——从选题策划到内容分发，了解人工智能对媒体人工作方式的六大变革">` `<meta name="keywords" content="AI,人工智能,传媒行业,新闻媒体,内容生产,智能分发">` `<meta name="author" content="HW">` `<meta property="og:title" content="AI 正在重塑传媒行业">` `<meta property="og:description" content="探索AI如何重塑传媒行业——从选题策划到内容分发">` `<meta property="og:type" content="website">` `<link rel="canonical" href="./">`
```

- [ ] **Step 2: 为所有功能卡片添加语义化标签**

将每个 `.scene__card` 的 `<div>` 改为 `<article>`，并确保每个板块有正确的 `aria-labelledby`：

```html
<section id="topic" class="scene scene--orange" aria-labelledby="topic-title">
  ...
  <h2 id="topic-title" class="scene__title">...</h2>
  <div class="scene__cards">
    <article class="scene__card">...</article>
    ...
  </div>
</section>
```

- [ ] **Step 3: 为所有图片/图标占位添加 alt 文本（Emoji 无需 alt）**

确认所有 `<a>` 标签有明确的文本内容，无需额外 `aria-label`。

- [ ] **Step 4: 浏览器验证 — 页面结构无变化，用 WAVE 或 axe 插件检查无严重可访问性问题**

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "a11y: add SEO meta tags and semantic HTML structure"
```

---

### Task 3: 交互动效增强

**Files:**
- Create: `scripts.js`
- Modify: `index.html`（底部添加 `<script>` 引用）
- Modify: `styles.css`（添加动画相关类）

- [ ] **Step 1: 创建 `scripts.js` — 导航栏滚动阴影效果**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.25)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'rgba(0, 212, 255, 0.15)';
    }
  });
});
```

- [ ] **Step 2: 在 `styles.css` 中添加滚动触发动画类**

```css
/* Scroll reveal animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 3: 在 `scripts.js` 中添加 IntersectionObserver 逻辑**

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scene, .cta-section').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
```

- [ ] **Step 4: 在 `index.html` 底部添加 `<script src="scripts.js"></script>`**

- [ ] **Step 5: 浏览器验证 — 滚动时各板块渐入显示，导航栏阴影变化平滑**

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css scripts.js
git commit -m "feat: add scroll reveal animations and navbar scroll effects"
```

---

### Task 4: 详情页模板骨架

**Files:**
- Create: `detail-template.html`

- [ ] **Step 1: 创建通用详情页模板，复用首页导航和 Footer**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><!-- 板块名称 --> | AI × 传媒变革</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    /* Detail page specific overrides */
    .detail-hero {
      min-height: 50vh;
      padding-top: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .detail-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 32px;
    }
    .detail-section {
      margin-bottom: 48px;
    }
    .detail-section h3 {
      font-size: 20px;
      margin-bottom: 12px;
      color: var(--theme-color, var(--cyan));
    }
    .detail-section p {
      color: var(--text-secondary);
      line-height: 1.8;
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="navbar__logo">
      <div class="navbar__logo-icon">A</div>
      <span class="navbar__logo-text">AI × 传媒变革</span>
    </div>
    <div class="navbar__links">
      <a href="index.html" class="navbar__link">首页</a>
      <!-- 其他导航链接 -->
    </div>
  </nav>

  <section class="detail-hero" style="--theme-color: var(--cyan);">
    <div class="hero__grid-bg"></div>
    <div class="hero__content">
      <div class="hero__badge">板块标签</div>
      <h1 class="hero__title">板块标题</h1>
      <p class="hero__subtitle">板块描述</p>
    </div>
  </section>

  <main class="detail-content">
    <article class="detail-section">
      <h3>场景一</h3>
      <p>详细描述...</p>
    </article>
    <article class="detail-section">
      <h3>场景二</h3>
      <p>详细描述...</p>
    </article>
    <article class="detail-section">
      <h3>场景三</h3>
      <p>详细描述...</p>
    </article>
  </main>

  <footer class="footer">
    <div class="footer__inner">
      <div class="navbar__logo">
        <div class="navbar__logo-icon">A</div>
        <span class="navbar__logo-text">AI × 传媒变革</span>
      </div>
      <div class="footer__links">
        <a href="index.html">首页</a>
        <a href="#">关于我们</a>
        <a href="#">联系方式</a>
      </div>
      <div class="footer__copyright">© 2026 AI × 传媒变革. 技术引领，探索未来.</div>
    </div>
  </footer>
</body>
</html>
```

- [ ] **Step 2: 浏览器验证 — 模板页面能正常打开，结构与首页风格一致**

- [ ] **Step 3: Commit**

```bash
git add detail-template.html
git commit -m "feat: add detail page template for future expansion"
```

---

### Task 5: 最终验证与清理

**Files:**
- All files

- [ ] **Step 1: 完整页面走查**

在浏览器中从上到下检查：
1. 导航栏固定、锚点跳转正常
2. Hero 区全屏、渐变标题、数据条完整
3. 6 个场景区块颜色正确切换、hover 效果正常
4. 滚动时板块渐入动画正常
5. CTA 区渐变标题、双按钮
6. Footer 对齐
7. 缩小窗口验证响应式（移动端导航隐藏、卡片单列、数据条堆叠）

- [ ] **Step 2: 验证外部 CSS 加载无 404**

打开 Network 面板，确认 `styles.css` 和 `scripts.js` 加载正常。

- [ ] **Step 3: 清理未使用文件**

删除旧版 `index.html` 备份（如有），确认目录整洁。

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final review and cleanup for AI media homepage"
```

---

## 自检

1. **Spec coverage**: 
   - 6 大板块内容 ✓（Task 1 基于已有代码）
   - 深色科技风视觉 ✓
   - 响应式设计 ✓（已有 media queries）
   - 扩展性（详情页模板）✓（Task 4）
   - SEO/可访问性 ✓（Task 2）

2. **Placeholder scan**: 无 TBD/TODO

3. **Type consistency**: CSS 变量名与设计中一致，颜色值匹配设计文档
