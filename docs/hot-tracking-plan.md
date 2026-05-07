# 热点实时追踪工作流演示系统 — 实施计划

## 目标
改造 `topic-research.html`，从纯文字介绍页变为可交互的热点追踪工作流演示系统。

---

## Task 1: 引入 Chart.js 并更新页面结构

**文件:** `topic-research.html`

- [ ] 在 `<head>` 中添加 Chart.js CDN：`https://cdn.jsdelivr.net/npm/chart.js`
- [ ] 保留导航栏和 Hero 区域
- [ ] 删除现有的 `detail-content` 纯文字内容
- [ ] 新增 `.dashboard-section` 容器（热点监控仪表盘）
- [ ] 新增 `.analysis-section` 容器（AI 分析流程面板）

## Task 2: 实现热点监控仪表盘（上半部分）

**文件:** `topic-research.html`, `styles.css`

- [ ] 创建平台筛选标签栏（全部 / 微博 / 小红书 / 抖音 / 知乎 / B站）
- [ ] 创建热点卡片组件：排名、标题、热度值、热度条、迷你 sparkline
- [ ] 编写 12 条模拟数据（JS 对象数组）
- [ ] 实现卡片渲染函数：按热度排序，带平台过滤
- [ ] 实现 `setInterval` 定时微调热度值并重新排序（每 3 秒）
- [ ] 实现卡片点击事件：高亮选中态，触发分析面板
- [ ] CSS：卡片 hover 效果（上浮 + 橙色发光边框）
- [ ] CSS：响应式网格（桌面 2 列，移动端 1 列）

## Task 3: 实现 AI 分析流程面板（下半部分）

**文件:** `topic-research.html`, `styles.css`

- [ ] 创建步骤指示器组件（4步：热度分析 → 情感研判 → 传播溯源 → 趋势预测）
- [ ] 实现步骤自动播放逻辑：每步 2.5 秒，从第 1 步到第 4 步
- [ ] 实现播放/暂停控制按钮
- [ ] 实现手动点击切换步骤
- [ ] 实现未选中占位提示："👆 点击上方任意热点，查看 AI 深度分析流程"

## Task 4: 实现 Chart.js 图表

**文件:** `topic-research.html`（内联 JS 或 `<script>` 标签）

- [ ] 步骤1 — 24小时热度折线图（Line Chart）
- [ ] 步骤2 — 五维情感雷达图（Radar Chart）
- [ ] 步骤3 — 平台传播占比环形图（Doughnut Chart）
- [ ] 步骤4 — 预测结论面板（置信度大数字 + verdict 标签 + 选题建议卡片）
- [ ] 图表暗黑模式适配：文字颜色、网格线颜色
- [ ] 图表切换时销毁旧实例，避免内存泄漏
- [ ] 切换热点时：重置步骤 → 销毁旧图表 → 重新渲染

## Task 5: 动画与交互细节

**文件:** `topic-research.html`, `styles.css`

- [ ] 热度数字滚动动画（requestAnimationFrame，0 → 实际值，800ms）
- [ ] 步骤面板切换动画（opacity + translateX）
- [ ] Chart.js 图表入场动画（duration: 1000, easing: easeOutQuart）
- [ ] 步骤指示器高亮/完成态样式

## Task 6: 验证与清理

- [ ] 浏览器打开验证：桌面端布局、交互流程、图表显示
- [ ] 浏览器验证：移动端响应式
- [ ] 检查控制台无报错
- [ ] 删除 `docs/hot-tracking-design.md` 和 `docs/hot-tracking-plan.md`（或保留但不提交）
- [ ] `git add` + `git commit` + `git push`
