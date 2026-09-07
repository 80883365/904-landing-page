# 技术栈规范

> 🚨 **强制执行** - 每次网站开发/修改时必须遵守的技术栈约束

---

## 核心技术栈（固定，不可变更）

### 必须使用
- **框架**: Astro v6（最新版本）
- **语言**: TypeScript
- **样式**: Tailwind CSS v4（最新版本）
- **内容管理**: Astro Content Collections
- **CMS**: Decap CMS（访问路径 `/admin/`）
- **图片优化**: Sharp
- **表单提交**: Web3Forms
- **字体方案**: 本地字体（存放在 `public/fonts/`）
- **部署平台**: Cloudflare Pages
- **版本控制**: GitHub

---

## 技术栈约束

### ❌ 绝对禁止使用（除非用户明确要求）
- WordPress
- Next.js
- Vue / Nuxt
- React SPA
- Webflow
- Wix
- jQuery
- Bootstrap
- shadcn/ui 或其他外部 UI 组件库
- 多个 CSS 框架混用
- Alpine.js / Vue / React 等客户端框架（仅用于表单交互时除外）

### ✅ 原则
保持技术栈简洁：**Astro v6 + TypeScript + Tailwind v4 + Content Collections + Decap CMS + Sharp + 本地字体 + Web3Forms**

---

## 表单与转化规范

### 询盘弹窗组件（必须实现）
- **组件架构**: 必须创建可复用的询盘弹窗组件
  - `ContactModal.astro` - 弹窗容器组件
  - `ContactForm.astro` - 表单组件
- **表单提交**: 使用 Web3Forms
- **客户端验证**: 原生 HTML5 validation
- **加载状态**: 原生 JavaScript（避免引入 Alpine.js 等额外依赖）

### 表单字段规范
**必须包含的字段**：
- **Name** - 姓名（可选）
- **Email** - 邮箱（必填）
- **Phone** - 电话（可选）
- **Message** - 留言/需求（必填）

**❌ 禁止默认添加的字段**：
- Company（公司）
- Country（国家）
- Product Interest（产品兴趣）
- Application（应用）
- Required Specs（规格要求）
- Quantity（数量）
- Destination Port（目的港）
- Timeline（时间线）
- File Upload（文件上传）
- Address（地址）
- 必填的 WhatsApp

**Hidden 字段（用于追踪来源）**：
- `sourcePage` - 来源页面
- `productInterest` - 产品兴趣
- `applicationInterest` - 应用场景兴趣
- `ctaLabel` - 点击的 CTA 按钮文案

### CTA 行为规范
**✅ 正确做法**：
- 所有主要 CTA 按钮点击后**必须**调用询盘弹窗
- 弹窗在当前页面以 Modal 形式展示

**❌ 禁止做法**：
- 跳转到 `/contact/` 联系页面
- 打开新窗口/新标签页
- 使用 `mailto:` 链接
- 把 WhatsApp 作为唯一转化路径

**推荐 CTA 文案**：
- `Request Quote`
- `Get Product Recommendation`
- `Send Your Requirements`
- `Ask a Question`
- `Contact Us`
- `Get in Touch`

---

## 图片处理规范

### 图片资源使用规则
- **本地图片库**: `landscape-images/` 文件夹
- ❌ **绝对禁止**直接引用任何远程图片链接（包括 OSS、CDN 等）
- ✅ **必须使用本地图片**：新页面或任何需要图片时，从 `landscape-images/` **随机选择**图片
- **图片处理流程**:
  1. 从 `landscape-images/` **随机选择**一张图片（不需要挑选，随机即可）
  2. 复制到目标位置（`src/images/` 或 `public/images/`）
  3. 根据使用场景裁切为合适尺寸和比例（hero、产品卡片、应用区块等）
  4. 尽可能转换为 WebP 格式
  5. 文件名使用英文描述性命名（如 `hero-background.webp`、`product-showcase.webp`）

### 图片存放位置
- **源图片库**: `landscape-images/` （仅供随机选择，不直接引用）
- **实际使用**: 
  - `src/images/` - 需要通过 Astro 优化的图片
  - `public/images/` - 静态图片资源
  - `public/images/placeholders/` - 占位图片（从 landscape-images 随机复制）

### 图片优化要求
- 优先使用自建的 `OptimizedImage.astro` 或 Astro 图片优化方案
- 使用 Sharp 自动处理压缩
- **格式**: 优先 WebP
- **Alt 文本**: 所有图片必须有有意义的英文 `alt` 属性
- **尺寸设置**: 尽量设置图片尺寸，减少 CLS（Cumulative Layout Shift）
- ❌ **禁止**页面直接 hotlink 外部图片
- ❌ **禁止**直接引用 `landscape-images/` 中的图片（必须先复制到合适位置）

---

## 字体方案规范

### ✅ 允许使用
- 本地字体文件（存放在 `public/fonts/`）
- `system-ui` 作为 fallback

### ❌ 禁止使用
- Google Fonts
- Adobe Fonts
- 第三方字体 CDN
- 任何远程字体引用

### 优化要求
- 使用 `preload` 优化字体加载

---

## 代码规范

### 命名约定
- **组件文件**: PascalCase（`Hero.astro`, `ProductCard.astro`）
- **页面文件**: kebab-case（`about-us.astro`, `contact.astro`）
- **工具函数**: camelCase

### Astro 组件结构
```astro
---
// 1. 导入
import Layout from '../layouts/Layout.astro';

// 2. Props 类型定义
interface Props {
  title: string;
  description?: string;
}

// 3. Props 解构
const { title, description } = Astro.props;

// 4. 数据获取逻辑
---

<!-- 5. HTML 模板 -->
<div class="container">
  <h1>{title}</h1>
</div>

<!-- 6. 样式（仅在必要时使用） -->
<style>
  /* 仅在必要时使用 scoped 样式 */
</style>
```

---

## Tailwind CSS 使用规范

### 基本原则
- 优先使用 Tailwind 工具类
- 调整视觉风格时优先改 `src/styles/global.css` 中的 theme tokens，不要到处散改 class
- 如果项目存在 `DESIGN.md`，必须服从它
- 自定义样式写在 `tailwind.config.mjs` 的 theme 扩展中
- ❌ 避免内联 style 属性

### 响应式断点
```js
// tailwind.config.mjs
screens: {
  'sm': '640px',   // 手机横屏
  'md': '768px',   // 平板
  'lg': '1024px',  // 小屏电脑
  'xl': '1280px',  // 桌面
  '2xl': '1536px'  // 大屏
}
```

---

## 性能要求

### 目标指标
- Lighthouse Performance Score ≥ 90
- 首屏加载时间（LCP）< 2.5 秒

### 优化策略
- **图片**: 懒加载 + 响应式 + WebP
- **CSS**: Tailwind v4 自动优化
- **JavaScript**: 最小化使用，优先静态渲染
- **字体**: 自托管 + preload

---

## 项目结构

```
project/
├── src/
│   ├── components/       # 可复用组件
│   │   ├── ContactModal.astro   # 询盘弹窗（必须）
│   │   └── ContactForm.astro    # 询盘表单（必须）
│   ├── layouts/          # 页面布局
│   ├── pages/            # 页面路由
│   ├── content/          # 内容集合（products、blog、faq）
│   ├── config/           # 全局配置（site.ts）
│   ├── styles/           # 全局样式（global.css）
│   └── images/           # 本地图片资源（使用中）
├── public/
│   ├── admin/            # Decap CMS（必须配置）
│   ├── images/           # 静态图片
│   │   └── placeholders/ # 占位图片（从 landscape-images 复制）
│   └── fonts/            # 本地字体文件
├── landscape-images/     # 图片资源库（30张无版权风景图）
├── astro.config.mjs
└── tailwind.config.mjs
```

---

## 开发约束

### ❌ 禁止操作
- 直接修改 `node_modules`
- 在组件中直接写大段 JS（应抽离到单独文件）
- 第一版上线前进行不必要的大重构
- 过度工程化（第一版上线前避免引入复杂架构）
- **CTA 按钮跳转到 `/contact/` 页面（必须使用弹窗）**
- **表单添加未在规范中列出的字段**

### ✅ 推荐做法
- 保持代码简洁、可维护
- 优先完成核心功能
- 渐进式优化
- **所有 CTA 统一使用询盘弹窗**
- **表单保持简洁（仅 Name、Email、Phone、Message）**

---

## 构建与部署

### 构建命令
```bash
npm run build
```

### 输出目录
```
dist/
```

### 环境变量
```env
PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 检查清单

开发时必须确认：
- [ ] 使用 Astro v6 + TypeScript + Tailwind v4
- [ ] 所有 CTA 调用询盘弹窗而非跳转页面
- [ ] 表单仅包含 Name、Email、Phone、Message 四个字段
- [ ] 所有图片从 `landscape-images/` 复制到本地使用，无远程链接
- [ ] 图片已转换为 WebP 格式（优先）
- [ ] 字体存放在 `public/fonts/`，无 CDN 引用
- [ ] 已配置 Decap CMS 在 `/admin/`
- [ ] 表单使用 Web3Forms
- [ ] 未引入禁止的框架或库
