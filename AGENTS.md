# AGENTS.md — 904着陆页（CarboPure B2B 网站模板）

技术栈：Astro v6 + TypeScript + Tailwind CSS v4（CSS-first `@theme`）+ Decap CMS + Web3Forms + Sharp + 本地字体。部署目标 Cloudflare Pages。

## 🚨 每次任务开始前必须先读以下文档

1. **`.claude/rules/TECH-STACK.md`** — 技术栈约束、CTA/表单规范、图片处理、禁止的框架
2. **`.claude/rules/SEO.md`** — Meta/H1/Schema/图片 alt/URL/性能 SEO 强制要求
3. **`.claude/rules/CMS-MEDIA.md`** — Decap CMS 图库规则（`public/images/` 唯一根目录）
4. **`.claude/projects/H------631/memory/no-placeholder-images.md`** — 🚨 最高优先级：禁止占位图、禁止内容重复图片
5. **`.claude/projects/H------631/memory/image-organization-rules.md`** — 图片按页面分文件夹、禁止跨页面复用

其他参考（按需阅读）：

- `CLAUDE.md` — 上述规则的浓缩版
- `TEMPLATE-GUIDE.md` — 用此模板启动新项目的完整流程
- `CMS-图库使用说明.md` / `CMS图库修复步骤.md` — CMS 图库使用与排查
- `.claude/memory/` — 特色图片要求、SEO 实现记录、面包屑设计规范、模板使用指南

## 核心强制规则（速览）

- **技术栈固定**：禁止 WordPress / Next.js / Vue / React SPA / jQuery / Bootstrap / UI 组件库 / 远程字体（Google Fonts 等）。样式优先改 `src/styles/global.css` 的 `@theme` tokens
- **转化机制**：所有 CTA 按钮必须弹出 `ContactModal.astro` 询盘弹窗；❌ 禁止跳转 `/contact/`、禁止 `mailto:`、禁止新窗口
- **表单字段**：仅 Name（可选）/ Email（必填）/ Phone（可选）/ Message（必填），提交走 Web3Forms；❌ 禁止添加 Company、Country、Quantity 等字段
- **图片**：
  - 🚨 禁止占位图、禁止不同文件名相同内容（每张图内容必须不同、文件名描述性英文 kebab-case、alt 准确含关键词）
  - 代码引用的图片放 `src/assets/images/<页面名>/`，每个页面独立文件夹，禁止跨页面复用（`shared/` 中的博客/产品默认图除外）
  - `public/images/` 仅归 CMS 使用（见 CMS-MEDIA.md，图库为唯一根目录，不用子文件夹），代码禁止引用
  - 优先 WebP、本地化、禁止远程链接、禁止直接引用 `landscape-images/`（先复制再裁切）
- **SEO**：每页唯一 title/description、有且仅有一个 H1、不跳级；Schema.org（Organization/Product/Article/BreadcrumbList）；重要页面必须有特色图片（OG 1200x630，<300KB）；面包屑单行显示、溢出省略号截断
- **性能目标**：Lighthouse Performance ≥ 90，LCP < 2.5s

## 冲突处理

- 图片规则（no-placeholder-images、image-organization-rules）优先级最高
- CMS 图库结构以 `.claude/rules/CMS-MEDIA.md` 为准（它修订了早期文档中 `public/images/products/` 子目录的写法）
- 用户需求与规范冲突时，先向用户确认是否突破约束，再动手
