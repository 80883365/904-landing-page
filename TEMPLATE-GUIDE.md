# 使用模板快速启动新项目

> 本项目是生产就绪的B2B营销网站模板，适用于制造业、工业品、B2B服务等行业

---

## 🚀 快速开始

### 1. 基础配置（必须）

**编辑 `src/config/site.ts`**:
```typescript
export const SITE = {
  name: "YourBrand",               // 改为你的品牌名
  legalName: "Your Company Ltd.",  // 公司法定名称
  tagline: "Your tagline here",    // 品牌标语
  url: "https://yourdomain.com",   // 你的域名
  description: "...",              // SEO描述（150-160字符）
  
  contact: {
    email: "sales@yourdomain.com",
    phone: "+xx xxx xxx xxxx",
    whatsapp: "+xx xxx xxx xxxx",
    addressLine1: "Your address",
    addressLine2: "City, Country",
    hours: "Working hours",
  },
  
  web3formsKey: "YOUR_KEY",  // 从 https://web3forms.com 获取
  
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/..." },
    { label: "YouTube", href: "https://youtube.com/@..." },
  ],
};
```

**编辑 `astro.config.mjs`**:
```javascript
export default defineConfig({
  site: "https://yourdomain.com",  // 改为你的域名
  // ...
});
```

**编辑 `public/robots.txt`**:
```txt
Sitemap: https://yourdomain.com/sitemap-index.xml  // 改为你的域名
```

---

## 📝 内容替换

### 2. 产品内容

**路径**: `src/content/products/`

复制现有产品文件，修改frontmatter：
```markdown
---
title: "Your Product Name"
description: "Product description for SEO (150-160 chars)"
category: "Product Category"
icon: "package"  # 从 Icon.astro 选择
badge: "Popular"  # 可选徽章
featured: true   # 是否在首页显示
order: 1         # 排序
tags: ["tag1", "tag2"]
---

# 产品详细内容（Markdown格式）
```

**删除示例产品**，保留产品数量建议：3-8个

### 3. 博客文章

**路径**: `src/content/blog/`

复制现有文章，修改frontmatter：
```markdown
---
title: "Article Title"
description: "Article summary (150-160 chars)"
pubDate: 2026-07-15
author: "Author Name"
category: "Technical Guide"  # 或 "Buying Guide" / "Industry Insights"
tags: ["tag1", "tag2"]
draft: false
---

## 文章内容

使用h2、h3标题会自动生成目录...
```

**分类建议**：
- Technical Guide（技术指南）
- Buying Guide（采购指南）
- Industry Insights（行业洞察）

**文章数量建议**：10-20篇

---

## 🎨 视觉定制

### 4. 设计Token

**编辑 `src/styles/global.css` 的 `@theme` 部分**:

```css
@theme {
  /* 品牌主色 */
  --color-brand-600: #052a68;  /* 改为你的品牌色 */
  --color-brand-700: #004075;
  
  /* 强调色（CTA按钮） */
  --color-accent-500: #0099d6;  /* 改为你的强调色 */
  --color-accent-600: #007eaf;
  
  /* 字体（如需更换） */
  --font-sans: "YourFont", ui-sans-serif, system-ui, sans-serif;
}
```

**标题字号（Type Scale，全站统一）**：标题在 `global.css` base 层统一收紧约 15%，请勿在组件中用 `!text-5xl` 等硬编码覆盖：

- `h1`：`clamp(1.875rem, 1.35rem + 2.5vw, 3.25rem)`（约 30→52px，首页 / 产品 / 文章主标题）
- `h2`：`clamp(1.5rem, 1.15rem + 1.6vw, 2.125rem)`（约 24→34px，区块标题）
- `h3`：`clamp(1.2rem, 1.05rem + 0.85vw, 1.375rem)`（约 19→22px，卡片标题）
- 配套 tokens：`--text-4xl` 2.125rem / `--text-5xl` 2.625rem / `--text-6xl` 3.25rem

### 5. 图片替换

**替换路径**: `src/assets/images/` 和 `public/`

必须替换的图片：
- `og-default.jpg` - OG分享图（1200x630px）
- `favicon.svg` - 网站图标
- `logo.png` - Logo（用于Schema）
- `hero-wide.webp` - 首页Hero图
- `product-card.webp` - 产品卡片图
- `blog-wide.webp` - 博客卡片图
- `application.webp` - 应用场景图
- `quality-lab.webp` - 质量认证图

**图片规范**：
- 格式：WebP优先（Sharp自动处理）
- 命名：英文小写+连字符（`your-image-name.webp`）
- Alt文本：必须有描述性alt属性

---

## 🧭 导航定制

### 6. 主导航

**编辑 `src/config/navigation.ts` 的 `MAIN_NAV`**:

```typescript
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",  // 改为你的产品类别
    href: "/products",
    children: [
      {
        label: "Product 1",
        href: "/products/product-1",
        blurb: "Short description",
      },
      // 添加更多产品...
    ],
  },
  // 根据业务调整导航项...
];
```

### 7. Footer链接

**编辑 `src/config/navigation.ts` 的 `FOOTER_LINKS`**

根据实际页面调整Footer链接结构。

---

## 📄 页面定制

### 8. 首页

**编辑 `src/pages/index.astro`**:

需要修改的部分：
- Hero标题和描述
- `industries` 数组（应用场景）
- `steps` 数组（流程步骤）
- 统计数据（如有StatStrip组件）

### 9. About页面

**编辑 `src/pages/about.astro`**:
- 公司简介
- 团队信息
- 历史沿革

### 10. Applications页面

**编辑 `src/pages/applications.astro`**:
- 修改应用场景
- 行业案例

---

## 🔧 技术配置

### 11. Web3Forms设置

1. 访问 https://web3forms.com
2. 创建免费账号
3. 获取Access Key
4. 填入 `src/config/site.ts` 的 `web3formsKey`

### 12. Decap CMS（可选）

如果使用CMS编辑内容：

**编辑 `public/admin/config.yml`**:
```yaml
backend:
  name: git-gateway  # 或 github
  branch: main

# 根据需要调整collections配置
```

需要配置：
- Netlify Identity（如用git-gateway）
- 或 GitHub OAuth（如用github backend）

---

## 🚀 部署

### 推荐：Cloudflare Pages

1. 推送代码到GitHub
2. 登录 Cloudflare Dashboard
3. Pages → Create a project
4. 选择GitHub仓库
5. 构建设置：
   - Build command: `npm run build`
   - Build output: `dist`
6. 部署

### 环境变量（可选）

如果不想在代码中暴露Web3Forms key：

```env
PUBLIC_WEB3FORMS_KEY=your_key_here
```

然后在代码中使用：
```typescript
import.meta.env.PUBLIC_WEB3FORMS_KEY
```

---

## ✅ 上线前检查清单

在正式上线前，务必检查：

- [ ] `src/config/site.ts` 所有信息已更新
- [ ] `astro.config.mjs` 域名已修改
- [ ] `public/robots.txt` 域名已修改
- [ ] Web3Forms key已配置
- [ ] 所有占位图片已替换为真实图片
- [ ] Logo和favicon已替换
- [ ] OG默认图已创建（1200x630px jpg）
- [ ] 产品内容已替换（至少3个）
- [ ] 博客文章已添加（至少10篇）
- [ ] 导航链接已更新
- [ ] 联系信息正确（邮箱、电话、地址）
- [ ] 社交媒体链接已更新
- [ ] Privacy Policy和Terms已审阅
- [ ] 本地字体文件已添加到 `public/fonts/`
- [ ] 移动端测试通过
- [ ] Lighthouse Performance ≥ 90

---

## 📚 上线后操作

1. **提交Sitemap**:
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **验证网站所有权**（GSC/Bing）

3. **设置Analytics**（可选）:
   - Google Analytics
   - Plausible
   - Cloudflare Web Analytics

4. **监控性能**:
   - Core Web Vitals
   - Uptime monitoring

---

## 🆘 常见问题

**Q: 如何添加新产品？**
A: 复制 `src/content/products/` 中的现有文件，修改内容，构建即可。

**Q: 如何修改颜色？**
A: 编辑 `src/styles/global.css` 的 `@theme` 部分。

**Q: 表单提交不工作？**
A: 检查 `src/config/site.ts` 中的 `web3formsKey` 是否正确填写。

**Q: 如何隐藏Decap CMS？**
A: 删除 `public/admin/` 目录，并在 `robots.txt` 中移除相关配置。

**Q: 可以改用其他CMS吗？**
A: 可以，Astro支持多种CMS。Content Collections系统是独立的。

---

## 📖 相关文档

- [技术栈规范](.claude/rules/TECH-STACK.md)
- [SEO规范](.claude/rules/SEO.md)
- [Astro文档](https://docs.astro.build)
- [Tailwind v4文档](https://tailwindcss.com/docs/v4-beta)

---

**模板版本**: 1.0  
**最后更新**: 2026-07-14
