# Claude 开发指南

## 🚨 强制执行规范

在开始任何开发任务前，**必须先阅读**以下规范文档：

- **技术栈规范**: `.claude/rules/TECH-STACK.md`
- **SEO技术规范**: `.claude/rules/SEO.md`

## 核心原则

### 技术栈约束（不可违反）
- 框架: **Astro v6** + TypeScript + Tailwind CSS v4
- CMS: **Decap CMS** (`/admin/`)
- 表单: **Web3Forms**
- 图片优化: **Sharp**
- 字体: **本地自托管**（`public/fonts/`）
- 部署: **Cloudflare Pages**

### 转化机制（强制）
- ✅ 所有 CTA 按钮 → 弹窗表单（`ContactModal.astro`）
- ❌ 禁止跳转到 `/contact/` 页面
- ❌ 禁止使用 `mailto:` 链接

### 表单规范（强制）
**允许的字段**：
- Name（可选）
- Email（必填）
- Phone（可选）
- Message（必填）

**禁止添加**：Company、Country、Product Interest、Quantity、Timeline、File Upload 等复杂字段

### 图片处理（强制）
- ❌ 禁止直接引用远程图片链接
- ✅ 必须下载到 `src/images/` 或 `public/images/`
- ✅ 优先使用 WebP 格式
- ✅ 所有图片必须有 `alt` 属性

### 字体方案（强制）
- ❌ 禁止使用 Google Fonts、Adobe Fonts 或任何 CDN
- ✅ 必须使用本地字体文件（`public/fonts/`）
- ✅ Fallback 使用 `system-ui`

## 开发流程

### 开始任何任务前
1. 阅读 `.claude/rules/TECH-STACK.md`
2. 检查是否存在 `DESIGN.md`（如有，必须遵守）
3. 确认任务符合技术栈约束

### 代码规范
- 组件文件: PascalCase（`Hero.astro`）
- 页面文件: kebab-case（`about-us.astro`）
- 优先使用 Tailwind 工具类
- 避免内联 style 属性

### 性能目标
- Lighthouse Performance ≥ 90
- LCP < 2.5 秒

## 禁止的技术栈

❌ 以下技术**绝对禁止使用**（除非用户明确要求）：
- WordPress, Next.js, Vue, React SPA
- Webflow, Wix
- jQuery, Bootstrap
- shadcn/ui 或其他 UI 组件库
- Google Fonts 或任何远程字体

## 检查清单

每次提交代码前确认：
- [ ] 技术栈符合规范（Astro v6 + TS + Tailwind v4）
- [ ] CTA 按钮使用弹窗而非页面跳转
- [ ] 表单字段符合规范（仅 4 个基础字段）
- [ ] 图片已本地化，无远程链接
- [ ] 字体已本地化，无 CDN 引用
- [ ] 未引入禁止的框架或库

---

**重要提示**: 本文档和 `.claude/rules/` 目录下的所有规范是强制性的，不可违反。如果用户的需求与规范冲突，必须先向用户确认是否要突破约束。
