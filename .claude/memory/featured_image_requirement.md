---
name: featured-image-requirement
description: 所有重要页面必须有特色图片用于SEO和社交分享
metadata:
  type: feedback
---

所有重要页面必须配置特色图片（heroImage），用于 Open Graph、Twitter Card 和 Schema.org。

**Why**: 
- 社交媒体分享时显示正确的预览图（Facebook、LinkedIn、Twitter等）
- Google 搜索结果可能显示图片预览
- 提升点击率和用户信任度
- Schema.org 结构化数据需要图片 URL

**How to apply**:

## 必须有特色图片的页面类型

1. **首页** (`src/pages/index.astro`)
   - 在 BaseLayout 中通过 `image` prop 传递
   - 推荐尺寸：1200x630px

2. **产品详情页** (`src/pages/products/[...slug].astro`)
   - Content Schema 字段：`heroImage`（可选）
   - 如果未设置，使用默认产品占位图
   - 推荐尺寸：1200x800px

3. **博客文章页** (`src/pages/blog/[...slug].astro`)
   - Content Schema 字段：`heroImage`（可选）
   - 如果未设置，使用默认博客占位图
   - 推荐尺寸：1200x675px

4. **应用场景页** (`src/pages/applications.astro`)
   - 通过 BaseLayout `image` prop 传递
   - 推荐尺寸：1200x630px

5. **关于我们页** (`src/pages/about.astro`)
   - 通过 BaseLayout `image` prop 传递
   - 推荐尺寸：1200x630px

## 可以忽略的页面

- 隐私政策 (`privacy.astro`)
- 服务条款 (`terms.astro`)
- 404 页面
- 联系页面（如果有独立页面）

## 技术实现模式

### 1. 静态页面
```astro
---
const pageImage = "/og-about.jpg"; // 或 import from assets
---
<BaseLayout 
  title="Page Title"
  description="..."
  image={pageImage}
>
```

### 2. 动态内容（博客/产品）
```astro
---
const d = content.data;
const heroImage = d.heroImage || defaultImage;
const schemaImage = d.heroImage 
  ? new URL(d.heroImage, SITE.url).href 
  : new URL(defaultImage.src, SITE.url).href;
---
<BaseLayout 
  title={d.title}
  description={d.description}
  image={heroImage}
  jsonLd={schema}
>
```

## CMS 配置

在 `public/admin/config.yml` 中，产品和博客必须有：
```yaml
- { label: "Featured Image", name: "heroImage", widget: "image", required: false, hint: "OG image (1200x630px)" }
- { label: "Image Alt Text", name: "heroImageAlt", widget: "string", required: false }
```

## 图片规范

- **格式**：JPG 或 WebP（OG 支持度更好选 JPG）
- **尺寸**：
  - 首页/通用页面：1200x630px（1.91:1 比例）
  - 博客文章：1200x675px（16:9 比例）
  - 产品页面：1200x800px（3:2 比例）
- **文件大小**：< 300KB
- **存放位置**：
  - 静态 OG 图：`public/og-*.jpg`
  - 动态内容图：`src/assets/images/blog/` 或 `/products/`

## BaseLayout 实现

`src/layouts/BaseLayout.astro` 必须：
1. 接收 `image` prop（可选，有默认值）
2. 设置 `og:image` 和 `twitter:image`
3. 设置 `og:image:width` 和 `og:image:height`
4. 设置 `og:image:alt`

## 检查清单

上线前确认：
- [ ] 首页有专门的 OG 图片
- [ ] 所有产品和博客在 CMS 中可以上传特色图片
- [ ] BaseLayout 正确处理 image prop
- [ ] 默认 OG 图片存在且符合规范（1200x630px）
- [ ] Schema.org 使用正确的图片 URL（绝对路径）

## 相关规范

参考 [[seo-rules]] 中的"图片 SEO 规范"部分。
