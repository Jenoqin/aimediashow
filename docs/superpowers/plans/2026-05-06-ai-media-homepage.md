# AI × 媒体未来 首页实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现一个深色科技风的"AI × 媒体未来"单页面网站首页，包含导航栏、Hero区、4个场景区块、CTA区和Footer。

**Architecture:** 纯 HTML + CSS 单页面，`index.html` 负责结构，`styles.css` 负责样式。CSS 变量统一管理主题色，每个场景区块复用同一套 class 模板，通过 CSS 变量切换颜色。

**Tech Stack:** HTML5, CSS3（Grid/Flexbox, CSS Custom Properties, transitions, @keyframes）

---

### Task 1: 项目骨架与 CSS 变量

**Files:**
- Create: `index.html`
- Create: `styles.css`

- [ ] **Step 1: 创建 `index.html` 骨架**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI × 媒体未来</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="navbar"></nav>
  <section class="hero"></section>
  <section class="scene scene--cyan"></section>
  <section class="scene scene--purple"></section>
  <section class="scene scene--gold"></section>
  <section class="scene scene--green"></section>
  <section class="cta-section"></section>
  <footer class="footer"></footer>
</body>
</html>
```

- [ ] **Step 2: 创建 `styles.css` — CSS Reset + 变量 + 基础样式**

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #050810;
  --bg-card: #111833;
  --text: #fff;
  --text-secondary: #8899bb;
  --text-muted: #667;
  --text-dim: #445;
  --cyan: #00d4ff;
  --purple: #7c3aed;
  --gold: #f59e0b;
  --green: #10b981;
  --theme-color: var(--cyan);
  --gradient: linear-gradient(90deg, #00d4ff, #7c3aed);
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}
```

- [ ] **Step 3: 用浏览器打开验证空白页面无报错**

Run: 在项目目录启动静态服务器（如 `python3 -m http.server 8080`），浏览器打开确认无 404 或 CSS 加载错误。

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: project skeleton with CSS variables and reset"
```

---

### Task 2: 导航栏

**Files:**
- Modify: `index.html` (nav 部分)
- Modify: `styles.css`

- [ ] **Step 1: 在 `index.html` 的 `<nav>` 中填入导航栏结构**

```html
<nav class="navbar">
  <div class="navbar__logo">
    <div class="navbar__logo-icon">A</div>
    <span class="navbar__logo-text">AI × 媒体未来</span>
  </div>
  <div class="navbar__links">
    <a href="#" class="navbar__link navbar__link--active">首页</a>
    <a href="#scene-cyan" class="navbar__link">AI内容生产</a>
    <a href="#scene-purple" class="navbar__link">智能分发</a>
    <a href="#scene-gold" class="navbar__link">多媒体处理</a>
    <a href="#scene-green" class="navbar__link">数据洞察</a>
  </div>
  <a href="#cta" class="navbar__cta">联系我们</a>
</nav>
```

- [ ] **Step 2: 在 `styles.css` 中添加导航栏样式**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: rgba(5, 8, 16, 0.9);
  border-bottom: 1px solid rgba(0, 212, 255, 0.15);
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__logo-icon {
  width: 28px;
  height: 28px;
  background: var(--gradient);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: var(--text);
}

.navbar__logo-text {
  font-size: 14px;
  font-weight: 600;
}

.navbar__links {
  display: flex;
  gap: 24px;
}

.navbar__link {
  font-size: 11px;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.navbar__link:hover,
.navbar__link--active {
  color: var(--cyan);
}

.navbar__cta {
  background: var(--gradient);
  color: var(--text);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  transition: box-shadow 0.3s;
}

.navbar__cta:hover {
  box-shadow: 0 0 16px rgba(0, 212, 255, 0.4);
}
```

- [ ] **Step 3: 浏览器验证导航栏固定在顶部，Logo/链接/按钮三端对齐**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: fixed navbar with logo, links, and CTA button"
```

---

### Task 3: Hero 区

**Files:**
- Modify: `index.html` (hero section)
- Modify: `styles.css`

- [ ] **Step 1: 在 `index.html` 的 `<section class="hero">` 中填入 Hero 区内容**

```html
<section class="hero">
  <div class="hero__grid-bg"></div>
  <div class="hero__content">
    <div class="hero__badge">2026 · 媒体行业AI转型指南</div>
    <h1 class="hero__title">
      当AI重新定义<br>
      <span class="hero__title-gradient">新闻的生产与传播</span>
    </h1>
    <p class="hero__subtitle">
      从选题策划到内容生成，从精准推送到效果评估<br>
      AI正在每一个环节重塑媒体行业的运作方式
    </p>
    <div class="hero__buttons">
      <a href="#scene-cyan" class="btn btn--primary">探索AI如何改变媒体</a>
      <a href="#" class="btn btn--outline">下载行业报告</a>
    </div>
    <div class="hero__stats">
      <div class="hero__stat">
        <div class="hero__stat-value" style="color: var(--cyan)">78%</div>
        <div class="hero__stat-label">媒体机构已采纳AI</div>
      </div>
      <div class="hero__stat">
        <div class="hero__stat-value" style="color: var(--purple)">3.2×</div>
        <div class="hero__stat-label">内容生产效率提升</div>
      </div>
      <div class="hero__stat">
        <div class="hero__stat-value" style="color: var(--gold)">96%</div>
        <div class="hero__stat-label">分发精准度</div>
      </div>
      <div class="hero__stat">
        <div class="hero__stat-value" style="color: var(--green)">50%</div>
        <div class="hero__stat-label">运营成本降低</div>
      </div>
    </div>
    <div class="hero__scroll-hint">↓ 向下滚动探索</div>
  </div>
</section>
```

- [ ] **Step 2: 给 4 个场景区块添加 id，在 `index.html` 中修改 `scene` section**

```html
<section id="scene-cyan" class="scene scene--cyan"></section>
<section id="scene-purple" class="scene scene--purple"></section>
<section id="scene-gold" class="scene scene--gold"></section>
<section id="scene-green" class="scene scene--green"></section>
```

- [ ] **Step 3: 在 `styles.css` 中添加 Hero 区样式**

```css
/* Buttons */
.btn {
  display: inline-block;
  padding: 10px 28px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn--primary {
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: var(--text);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
}

.btn--primary:hover {
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
}

.btn--outline {
  border: 1px solid rgba(0, 212, 255, 0.4);
  color: var(--cyan);
}

.btn--outline:hover {
  border-color: var(--cyan);
  background: rgba(0, 212, 255, 0.05);
}

/* Hero */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 32px 40px;
  background:
    radial-gradient(ellipse at 50% 30%, rgba(0, 212, 255, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 70%, rgba(124, 58, 237, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(245, 158, 11, 0.04) 0%, transparent 50%);
}

.hero__grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.hero__content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
}

.hero__badge {
  display: inline-block;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 4px 16px;
  font-size: 10px;
  color: var(--cyan);
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.hero__title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero__title-gradient {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 28px;
}

.hero__buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 36px;
}

.hero__stats {
  display: flex;
  width: 100%;
  max-width: 560px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  overflow: hidden;
}

.hero__stat {
  flex: 1;
  padding: 16px;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.hero__stat:last-child {
  border-right: none;
}

.hero__stat-value {
  font-size: 22px;
  font-weight: 800;
}

.hero__stat-label {
  font-size: 9px;
  color: var(--text-muted);
  margin-top: 2px;
}

.hero__scroll-hint {
  margin-top: 24px;
  font-size: 9px;
  color: var(--text-dim);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
```

- [ ] **Step 4: 浏览器验证 Hero 区全屏显示，渐变标题、数据条、按钮样式正确**

- [ ] **Step 5: Commit**

```bash
git add index.html styles.css
git commit -m "feat: hero section with gradient title, stats bar, and CTAs"
```

---

### Task 4: 场景区块通用样式与第一个场景

**Files:**
- Modify: `index.html` (scene--cyan 内容)
- Modify: `styles.css`

- [ ] **Step 1: 在 `styles.css` 中添加场景区块通用样式**

```css
/* Scene sections */
.scene {
  padding: 64px 32px;
  text-align: center;
}

.scene--cyan   { --theme-color: var(--cyan); }
.scene--purple { --theme-color: var(--purple); }
.scene--gold   { --theme-color: var(--gold); }
.scene--green  { --theme-color: var(--green); }

.scene__divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--theme-color), transparent);
  margin: 0 auto 32px;
  border-radius: 2px;
}

.scene__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.scene__icon {
  width: 32px;
  height: 32px;
  background: color-mix(in srgb, var(--theme-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--theme-color) 30%, transparent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.scene__label-text {
  font-size: 11px;
  color: var(--theme-color);
  letter-spacing: 3px;
  text-transform: uppercase;
}

.scene__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
}

.scene__title em {
  font-style: normal;
  color: var(--theme-color);
}

.scene__desc {
  font-size: 12px;
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 auto 32px;
  line-height: 1.7;
}

.scene__cards {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.scene__card {
  flex: 1;
  max-width: 200px;
  background: color-mix(in srgb, var(--theme-color) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--theme-color) 15%, transparent);
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s;
}

.scene__card:hover {
  border-color: color-mix(in srgb, var(--theme-color) 40%, transparent);
  transform: translateY(-4px);
}

.scene__card-icon {
  width: 40px;
  height: 40px;
  background: color-mix(in srgb, var(--theme-color) 10%, transparent);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 18px;
}

.scene__card-title {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.scene__card-desc {
  font-size: 10px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.scene__data {
  display: inline-flex;
  background: color-mix(in srgb, var(--theme-color) 5%, transparent);
  border: 1px solid color-mix(in srgb, var(--theme-color) 15%, transparent);
  border-radius: 12px;
  overflow: hidden;
}

.scene__data-item {
  padding: 16px 28px;
  text-align: center;
  border-right: 1px solid color-mix(in srgb, var(--theme-color) 10%, transparent);
}

.scene__data-item:last-child {
  border-right: none;
}

.scene__data-value {
  font-size: 22px;
  font-weight: 800;
  color: var(--theme-color);
}

.scene__data-label {
  font-size: 9px;
  color: var(--text-muted);
  margin-top: 2px;
}
```

- [ ] **Step 2: 在 `index.html` 的 scene--cyan section 中填入内容**

```html
<section id="scene-cyan" class="scene scene--cyan">
  <div class="scene__divider"></div>
  <div class="scene__label">
    <div class="scene__icon">📝</div>
    <span class="scene__label-text">AI内容生产</span>
  </div>
  <h2 class="scene__title">让AI成为你的<em>首席编辑</em></h2>
  <p class="scene__desc">从选题策划到稿件生成，从质量审核到多语言适配<br>AI覆盖内容生产全链路</p>
  <div class="scene__cards">
    <div class="scene__card">
      <div class="scene__card-icon">✍️</div>
      <div class="scene__card-title">智能撰稿</div>
      <div class="scene__card-desc">基于大模型的新闻稿件自动生成，支持多种文体和风格</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">🎯</div>
      <div class="scene__card-title">选题推荐</div>
      <div class="scene__card-desc">实时分析热点趋势，智能推荐最优选题方向</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">✅</div>
      <div class="scene__card-title">质量审核</div>
      <div class="scene__card-desc">多维度自动审核：事实核查、敏感词、排版规范</div>
    </div>
  </div>
  <div class="scene__data">
    <div class="scene__data-item">
      <div class="scene__data-value">3.2×</div>
      <div class="scene__data-label">生产效率提升</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">85%</div>
      <div class="scene__data-label">人工干预减少</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">24/7</div>
      <div class="scene__data-label">全天候不间断</div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: 浏览器验证 — 第一个场景区块三层结构完整，hover 卡片有上移效果**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: scene section template + AI content production scene (cyan)"
```

---

### Task 5: 其余 3 个场景区块

**Files:**
- Modify: `index.html` (scene--purple, scene--gold, scene--green)

- [ ] **Step 1: 在 `index.html` 的 scene--purple section 中填入内容**

```html
<section id="scene-purple" class="scene scene--purple">
  <div class="scene__divider"></div>
  <div class="scene__label">
    <div class="scene__icon">📡</div>
    <span class="scene__label-text">智能分发</span>
  </div>
  <h2 class="scene__title">每个读者都是<em>唯一受众</em></h2>
  <p class="scene__desc">AI驱动的个性化推荐引擎，让每一条内容精准触达目标读者<br>实现从"广而告之"到"精准投喂"的转变</p>
  <div class="scene__cards">
    <div class="scene__card">
      <div class="scene__card-icon">👤</div>
      <div class="scene__card-title">个性推荐</div>
      <div class="scene__card-desc">基于用户画像的内容推荐，千人千面</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">📱</div>
      <div class="scene__card-title">多渠道推送</div>
      <div class="scene__card-desc">APP、微信、邮件、短信多渠道协同分发</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">⚡</div>
      <div class="scene__card-title">实时优化</div>
      <div class="scene__card-desc">基于反馈数据持续优化推荐策略和投放效果</div>
    </div>
  </div>
  <div class="scene__data">
    <div class="scene__data-item">
      <div class="scene__data-value">96%</div>
      <div class="scene__data-label">分发精准度</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">3.2×</div>
      <div class="scene__data-label">触达效率提升</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">50%</div>
      <div class="scene__data-label">用户留存增长</div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: 在 `index.html` 的 scene--gold section 中填入内容**

```html
<section id="scene-gold" class="scene scene--gold">
  <div class="scene__divider"></div>
  <div class="scene__label">
    <div class="scene__icon">🎬</div>
    <span class="scene__label-text">多媒体处理</span>
  </div>
  <h2 class="scene__title">文字、图片、视频<em>一键生成</em></h2>
  <p class="scene__desc">从文字稿件自动生成配图、短视频、信息图<br>AI让多媒体内容生产不再依赖专业团队</p>
  <div class="scene__cards">
    <div class="scene__card">
      <div class="scene__card-icon">🎥</div>
      <div class="scene__card-title">AI剪辑</div>
      <div class="scene__card-desc">智能识别精彩片段，自动剪辑生成短视频</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">🏷️</div>
      <div class="scene__card-title">智能标注</div>
      <div class="scene__card-desc">自动识别画面内容，生成标签和描述文字</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">🔄</div>
      <div class="scene__card-title">跨媒体转换</div>
      <div class="scene__card-desc">文章转视频、视频转图文，一键跨格式转换</div>
    </div>
  </div>
  <div class="scene__data">
    <div class="scene__data-item">
      <div class="scene__data-value">5min</div>
      <div class="scene__data-label">视频生成</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">10×</div>
      <div class="scene__data-label">处理效率</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">100+</div>
      <div class="scene__data-label">格式支持</div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: 在 `index.html` 的 scene--green section 中填入内容**

```html
<section id="scene-green" class="scene scene--green">
  <div class="scene__divider"></div>
  <div class="scene__label">
    <div class="scene__icon">📊</div>
    <span class="scene__label-text">数据洞察</span>
  </div>
  <h2 class="scene__title">用数据驱动每一个<em>决策</em></h2>
  <p class="scene__desc">从舆情监测到用户行为分析，从效果归因到趋势预测<br>让数据成为媒体运营的核心引擎</p>
  <div class="scene__cards">
    <div class="scene__card">
      <div class="scene__card-icon">🔍</div>
      <div class="scene__card-title">舆情监测</div>
      <div class="scene__card-desc">实时追踪全网舆情动态，及时预警热点事件</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">📈</div>
      <div class="scene__card-title">行为分析</div>
      <div class="scene__card-desc">深度分析用户阅读行为，洞察内容消费偏好</div>
    </div>
    <div class="scene__card">
      <div class="scene__card-icon">🎯</div>
      <div class="scene__card-title">效果归因</div>
      <div class="scene__card-desc">精准归因每篇内容的传播效果，指导运营策略</div>
    </div>
  </div>
  <div class="scene__data">
    <div class="scene__data-item">
      <div class="scene__data-value">360°</div>
      <div class="scene__data-label">全景洞察</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">实时</div>
      <div class="scene__data-label">数据更新</div>
    </div>
    <div class="scene__data-item">
      <div class="scene__data-value">99.9%</div>
      <div class="scene__data-label">系统可用性</div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: 浏览器验证 — 4 个场景区块依次显示，颜色正确切换**

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: add remaining 3 scene sections (purple, gold, green)"
```

---

### Task 6: CTA 区与 Footer

**Files:**
- Modify: `index.html` (cta-section + footer)
- Modify: `styles.css`

- [ ] **Step 1: 在 `index.html` 的 cta-section 和 footer 中填入内容**

```html
<section id="cta" class="cta-section">
  <div class="cta-section__grid-bg"></div>
  <div class="cta-section__content">
    <div class="cta-section__divider"></div>
    <h2 class="cta-section__title">
      准备好拥抱<span class="cta-section__title-gradient">AI驱动的媒体未来</span>了吗？
    </h2>
    <p class="cta-section__subtitle">加入数百家媒体机构的行列，开启您的AI转型之旅</p>
    <div class="cta-section__buttons">
      <a href="#" class="btn btn--primary">开始免费体验</a>
      <a href="#" class="btn btn--outline">预约演示</a>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="footer__inner">
    <div class="navbar__logo">
      <div class="navbar__logo-icon">A</div>
      <span class="navbar__logo-text">AI × 媒体未来</span>
    </div>
    <div class="footer__links">
      <a href="#">首页</a>
      <a href="#">关于我们</a>
      <a href="#">联系方式</a>
      <a href="#">隐私政策</a>
    </div>
    <div class="footer__copyright">© 2026 AI × 媒体未来. All rights reserved.</div>
  </div>
</footer>
```

- [ ] **Step 2: 在 `styles.css` 中添加 CTA 区和 Footer 样式**

```css
/* CTA Section */
.cta-section {
  position: relative;
  padding: 56px 32px;
  text-align: center;
  background: radial-gradient(ellipse at 50% 100%, rgba(0, 212, 255, 0.08) 0%, transparent 60%);
}

.cta-section__grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.cta-section__content {
  position: relative;
}

.cta-section__divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #00d4ff, transparent);
  margin: 0 auto 28px;
  border-radius: 2px;
}

.cta-section__title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
}

.cta-section__title-gradient {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-section__subtitle {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 28px;
}

.cta-section__buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}

/* Footer */
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
}

.footer__links {
  display: flex;
  gap: 20px;
  font-size: 10px;
  color: var(--text-muted);
}

.footer__links a:hover {
  color: var(--cyan);
}

.footer__copyright {
  font-size: 9px;
  color: var(--text-dim);
}
```

- [ ] **Step 3: 浏览器验证 — CTA 区渐变标题和按钮显示正确，Footer 单行对齐**

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: CTA section and footer"
```

---

### Task 7: 响应式适配

**Files:**
- Modify: `styles.css`

- [ ] **Step 1: 在 `styles.css` 末尾添加响应式媒体查询**

```css
/* Tablet */
@media (max-width: 1024px) {
  .scene__cards {
    gap: 12px;
  }

  .scene__card {
    max-width: 180px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar__links {
    display: none;
  }

  .hero__title {
    font-size: 26px;
  }

  .hero__stats {
    flex-wrap: wrap;
  }

  .hero__stat {
    flex: 1 1 45%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .hero__stat:nth-child(2) {
    border-right: none;
  }

  .hero__stat:nth-child(3),
  .hero__stat:nth-child(4) {
    border-bottom: none;
  }

  .hero__buttons {
    flex-direction: column;
    align-items: center;
  }

  .scene__cards {
    flex-direction: column;
    align-items: center;
  }

  .scene__card {
    max-width: 100%;
    width: 100%;
  }

  .scene__data {
    flex-direction: column;
    width: 100%;
  }

  .scene__data-item {
    border-right: none;
    border-bottom: 1px solid color-mix(in srgb, var(--theme-color) 10%, transparent);
  }

  .scene__data-item:last-child {
    border-bottom: none;
  }

  .footer__inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  .cta-section__title {
    font-size: 22px;
  }
}
```

- [ ] **Step 2: 浏览器缩小窗口至平板和手机尺寸，验证布局正确折叠**

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: responsive breakpoints for tablet and mobile"
```

---

### Task 8: 最终验证

**Files:**
- All files

- [ ] **Step 1: 完整页面走查**

在浏览器中从上到下检查每个区块：
1. 导航栏固定、链接可点击
2. Hero 区全屏、渐变标题、数据条完整
3. 4 个场景区块颜色正确切换、hover 效果正常
4. CTA 区渐变标题、双按钮
5. Footer 单行对齐
6. 缩小窗口验证响应式

- [ ] **Step 2: 确认无 console 报错**

打开浏览器 DevTools Console，确认无 JS/CSS 错误。

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: final review pass for AI media homepage"
```
