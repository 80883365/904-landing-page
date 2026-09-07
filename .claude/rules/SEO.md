# SEO 技术规范

> 🚨 **强制执行** - 所有页面开发和内容发布时必须遵守的 SEO 技术要求

---

## Meta 标签规范（强制）

### 每个页面必须包含

**基础 Meta**：
- `<title>` - 页面标题（50-60字符）
- `<meta name="description">` - 页面描述（150-160字符）
- `<link rel="canonical">` - 规范URL

**社交媒体**：
- Open Graph 标签（og:title, og:description, og:image, og:url）
- Twitter Card 标签

### Title 标签规范

**格式规则**：
- 首页：`品牌名 - 核心业务描述`
- 产品页：`产品名 - 产品类型 | CarboPure`
- 博客文章：`文章标题 | CarboPure Blog`
- 其他页面：`页面标题 | CarboPure`

**约束**：
- 长度：50-60字符
- 每个页面必须唯一
- 包含主关键词
- ❌ 禁止关键词堆砌
- ❌ 禁止使用"Home"、"Index"等无意义词

### Description 标签规范

- **长度**：150-160字符
- **内容**：清晰描述页面内容 + 目标关键词 + 可选CTA
- **唯一性**：每个页面的description必须不同
- ❌ 禁止与title完全重复

---

## 结构化数据（Schema.org）

### 必须实现的Schema类型

**Organization Schema**（首页/About页）：
- 公司信息、Logo、联系方式、社交媒体链接

**Product Schema**（产品详情页）：
- 产品名称、描述、图片、品牌、可用性

**Article Schema**（博客文章页）：
- 标题、描述、作者、发布日期、修改日期

**BreadcrumbList Schema**（所有二级及以上页面）：
- 面包屑导航路径

### 实现方式
- 使用 JSON-LD 格式
- 放置在 Layout 组件的 `<head>` 中
- 通过 props 传递 `jsonLd` 对象

---

## 语义化 HTML 规范

### 标题层级（强制）

- **每个页面必须有且仅有一个 `<h1>`**
- **层级结构**：`h1` → `h2` → `h3` → `h4`（不可跳级）
- **H1 内容**：
  - 首页：品牌名或核心价值主张
  - 产品页：产品名称
  - 博客页：文章标题
  - 应用场景页：应用场景名称

### 语义化标签使用

必须使用的HTML5语义标签：
- `<header>` - 页头
- `<nav>` - 导航
- `<main>` - 主要内容区域（每页仅一个）
- `<article>` - 独立内容块（博客文章、产品）
- `<section>` - 内容分组
- `<footer>` - 页脚

### 链接规范

- **内部链接**：使用完整路径（如 `/products/coconut-shell`）
- **锚文本**：描述性文字，避免"click here"、"read more"
- **外部链接**：添加 `rel="noopener noreferrer"`

---

## URL 结构规范

### URL 命名规则

**格式**：全小写、连字符分隔、简短清晰

**正确示例**：
- ✅ `/products/coconut-shell-activated-carbon`
- ✅ `/blog/how-to-choose-activated-carbon`
- ✅ `/applications/water-treatment`

**错误示例**：
- ❌ `/products/Product_123`
- ❌ `/blog/post.php?id=456`
- ❌ `/应用场景/水处理`

### URL 层级

- **扁平化**：保持3层以内
- **一致性**：统一使用 trailing slash（`/products/` 或 `/products`，全站一致）

---

## Sitemap 与 Robots.txt

### Sitemap.xml（已实现）

- **工具**：使用 `@astrojs/sitemap` 插件自动生成
- **位置**：`https://yourdomain.com/sitemap.xml`
- **提交**：上线后提交到 Google Search Console 和 Bing Webmaster Tools

### Robots.txt（必须配置）

放置在 `public/robots.txt`：

```txt
User-agent: *
Allow: /

# 禁止抓取管理后台
Disallow: /admin/

# Sitemap 位置
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 图片 SEO 规范

### Alt 文本（强制）

- **所有图片必须有 alt 属性**
- **描述性**：清晰描述图片内容
- **关键词**：自然融入相关关键词
- **长度**：125字符以内

**正确示例**：
- ✅ `alt="Granular activated carbon for water purification"`
- ✅ `alt="Coconut shell activated carbon production facility"`

**错误示例**：
- ❌ `alt="image1"` 或 `alt=""`
- ❌ `alt="img"` 或 `alt="photo"`

### 图片文件名

- **描述性命名**：使用英文、连字符分隔
- **包含关键词**
- **示例**：`activated-carbon-water-treatment.webp`

### 图片优化（已遵守）

- **格式**：优先 WebP
- **压缩**：使用 Sharp 自动处理
- **尺寸**：设置 width 和 height 属性
- **懒加载**：非首屏图片使用 `loading="lazy"`

---

## 页面性能 SEO 要求

### Core Web Vitals 目标

- **LCP (Largest Contentful Paint)**：< 2.5秒
- **FID (First Input Delay)**：< 100毫秒
- **CLS (Cumulative Layout Shift)**：< 0.1

### Lighthouse 目标

- **Performance Score**：≥ 90

### 优化策略（已实现）

- ✅ WebP格式图片 + 懒加载
- ✅ 本地字体托管 + preload
- ✅ Tailwind v4自动优化CSS
- ✅ 最小化JavaScript使用
- ✅ Cloudflare Pages CDN

---

## 内容 SEO 规范

### 内容质量要求

- **原创性**：所有内容必须原创
- **深度**：B2B页面提供专业、详细的信息
- **可读性**：清晰的段落、小标题、列表
- **长度建议**：
  - 首页：800-1200词
  - 产品页：500-800词
  - 应用场景页：600-1000词
  - 博客文章：1500-2500词

### 关键词使用

- **自然融入**：避免关键词堆砌
- **密度**：1-2%（自然出现即可）
- **位置**：H1、前100词、小标题、正文、Alt文本

### 内部链接策略

- **锚文本**：使用描述性关键词
- **数量**：每页3-5个相关内部链接
- **相关性**：链接到相关产品、应用、博客文章
- **层级**：重要页面（产品、应用）获得更多内部链接

---

## 移动端 SEO 规范

### 响应式设计（已实现）

- ✅ 移动优先设计
- ✅ 触摸友好（按钮最小 48x48px）
- ✅ 字体大小适中
- ✅ 移动端导航清晰

### 测试要求

- 使用 Google Mobile-Friendly Test 验证
- 测试不同设备和屏幕尺寸

---

## 技术 SEO 检查清单

### 页面发布前必须检查

- [ ] 每个页面有唯一的 title 和 description
- [ ] 每个页面有且仅有一个 H1
- [ ] 标题层级正确（h1 → h2 → h3，不跳级）
- [ ] 所有图片有描述性 alt 文本
- [ ] 添加了相关的 Schema.org 标记
- [ ] Canonical URL 设置正确
- [ ] 面包屑导航正确（二级及以上页面）
- [ ] 内部链接无 404
- [ ] 移动端完全响应式
- [ ] Open Graph 和 Twitter Card 正确配置

### 网站上线前必须检查

- [ ] Sitemap.xml 正常生成
- [ ] Robots.txt 配置正确
- [ ] Lighthouse Performance Score ≥ 90
- [ ] Core Web Vitals 达标
- [ ] 所有页面无 console 错误

### 上线后操作

- [ ] 提交 sitemap 到 Google Search Console
- [ ] 提交 sitemap 到 Bing Webmaster Tools
- [ ] 验证网站所有权
- [ ] 设置 Google Analytics（如需要）

---

## BaseLayout 实现要求

当前项目的 `BaseLayout.astro` 必须支持以下 props：

```typescript
interface Props {
  title: string;           // 页面标题（必填）
  description: string;     // 页面描述（必填）
  image?: string;          // OG图片（可选，有默认值）
  type?: 'website' | 'article'; // 页面类型（可选）
  jsonLd?: object;         // 结构化数据（可选）
}
```

**使用示例**：
```astro
<BaseLayout
  title="Coconut Shell Activated Carbon | CarboPure"
  description="High-quality coconut shell activated carbon for water treatment..."
  type="website"
  jsonLd={productSchema}
>
  <!-- 页面内容 -->
</BaseLayout>
```

---

## 常见 SEO 错误（必须避免）

### ❌ 禁止操作

- 重复的 title 和 description
- 缺失 H1 或多个 H1
- 图片没有 alt 文本
- 内部链接使用"click here"作为锚文本
- URL 包含特殊字符或中文
- 页面加载速度过慢（LCP > 4秒）
- 移动端不可用
- 缺少 Schema.org 结构化数据
- 直接复制竞品内容
- 关键词堆砌
- 标题层级跳级（h1 → h3）

---

## 与其他规范的协同

本SEO规范与以下规范协同工作：

- **TECH-STACK.md**：技术栈选择已考虑SEO需求（Astro静态生成、Sharp图片优化、本地字体）
- **DESIGN.md**（如存在）：设计规范应支持SEO要求（面包屑、标题层级、移动端）

如有冲突，SEO规范优先级更高（因为SEO直接影响业务）。

---

## 参考资源

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Astro SEO Guide](https://docs.astro.build/en/guides/seo/)
