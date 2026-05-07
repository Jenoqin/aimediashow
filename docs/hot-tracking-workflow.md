# 热点实时追踪工作流演示系统 — 设计文档

## 目标
将 `topic-research.html` 从纯文字介绍页改造为可交互的热点追踪工作流演示系统，展示 AI 如何从多平台数据中捕捉热点并预测趋势。

## 页面架构

```
固定导航栏
Hero 区域（微调文案）
├─ ① 热点监控仪表盘
│   ├─ 平台筛选标签（全部 / 微博 / 小红书 / 抖音 / 知乎 / B站）
│   └─ 热点卡片网格（排名 + 标题 + 热度值 + sparkline）
└─ ② AI 分析流程面板
    ├─ 步骤指示器（4步）
    ├─ Chart.js 图表区
    │   ├─ 步骤1：24h 热度折线图（Line）
    │   ├─ 步骤2：情感分析雷达图（Radar）
    │   ├─ 步骤3：平台传播占比环形图（Doughnut）
    │   └─ 步骤4：预测结论面板（置信度 +  verdict + 选题建议）
    └─ 自动播放 / 暂停 控制
页脚
```

## 技术栈
- Chart.js（CDN，约 60KB gzipped）
- 纯 JS 模拟数据
- CSS Grid + Flexbox

## 数据模型

```javascript
{
  id: 1,
  platform: 'weibo', // weibo | xiaohongshu | douyin | zhihu | bilibili
  title: '杭州亚运会开幕式亮点',
  heat: 847300,
  heatHistory: [120, 180, 350, 520, 780, 640, 890, 847],
  sentiment: { positive: 45, negative: 12, angry: 8, worried: 15, sarcastic: 20 },
  platformShare: { weibo: 35, xiaohongshu: 20, douyin: 25, zhihu: 12, bilibili: 8 },
  prediction: {
    confidence: 87,
    verdict: 'follow', // follow | watch | skip
    suggestion: '从"数字人点火"角度切入，结合科技与人文视角'
  }
}
```

共 12 条模拟数据，覆盖 5 个平台。

## 交互流程

1. **页面加载**：渲染热点卡片，按热度降序排列；`setInterval` 每 3 秒微调热度值 ±5% 并重新排序
2. **用户点击卡片**：卡片高亮（橙色边框），触发下半部分分析面板
3. **分析面板激活**：
   - 未点击时显示占位提示："👆 点击上方任意热点，查看 AI 深度分析流程"
   - 点击后步骤指示器从第 1 步开始自动播放，每步停留 2.5 秒
   - 每步切换时 Chart.js 图表重绘并带动画
4. **切换热点**：销毁旧图表 → 重置步骤 → 重新播放
5. **手动控制**：步骤指示器右上角提供 播放/暂停 按钮

## 视觉设计

- 延续橙色主题（`--orange: #f97316`）
- 卡片 hover：上浮 + 橙色发光边框
- 热度数字：滚动计数动画（0 → 实际值，800ms）
- 步骤切换：`opacity + translateX` 淡入滑出
- Chart.js 图表：暗黑模式适配，坐标轴用 `--text-secondary`，网格线半透明白色
- 响应式：桌面 2 列卡片，移动端单列，步骤指示器可横向滚动
