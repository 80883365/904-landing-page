---
name: template-usage-guide
description: B2B网站模板使用指南 - 快速启动新项目的完整流程
metadata:
  type: reference
---

## 模板定位

本项目是生产就绪的B2B营销网站模板，专为制造业、工业品、B2B服务等行业设计。

**Why**: 提供可快速复用的现代化B2B网站架构，避免从零开始搭建。

**How to apply**: 当需要为新客户创建B2B网站时，复制此模板并按照 [[TEMPLATE-GUIDE.md]] 进行定制。

## 使用文档位置

完整的使用指南位于项目根目录的 `TEMPLATE-GUIDE.md`，包含以下内容：

### 1. 基础配置（必须完成）
- 编辑 `src/config/site.ts` - 品牌、联系信息、社交链接
- 编辑 `astro.config.mjs` - 域名配置
- 编辑 `public/robots.txt` - Sitemap URL

### 2. 内容替换
- **产品内容** - `src/content/products/` (建议3-8个产品)
- **博客文章** - `src/content/blog/` (建议10-20篇)
- **分类建议**: Technical Guide、Buying Guide、Industry Insights

### 3. 视觉定制
- **设计Token** - `src/styles/global.css` 的 `@theme` 部分
- **图片替换** - `src/assets/images/` 和 `public/`
- **必须替换**: og-default.jpg (1200x630px)、favicon.svg、logo.png、hero图、产品卡片图

### 4. 导航定制
- **主导航** - `src/config/navigation.ts` 的 `MAIN_NAV`
- **Footer链接** - `src/config/navigation.ts` 的 `FOOTER_LINKS`

### 5. 页面定制
- **首页** - `src/pages/index.astro` (Hero、应用场景、流程步骤)
- **About** - `src/pages/about.astro`
- **Applications** - `src/pages/applications.astro`

### 6. 技术配置
- **Web3Forms** - 从 https://web3forms.com 获取key
- **Decap CMS** - `public/admin/config.yml` (可选)

### 7. 部署
- **推荐**: Cloudflare Pages
- **构建命令**: `npm run build`
- **输出目录**: `dist`

## 上线前检查清单

文档中包含完整的检查清单，确保所有关键项目已完成：
- 配置文件已更新
- 占位图片已替换
- 联系信息正确
- SEO设置完整
- 移动端测试通过
- Lighthouse Performance ≥ 90

## 上线后操作

- 提交Sitemap到Google Search Console和Bing
- 验证网站所有权
- 设置Analytics（可选）
- 监控性能和Core Web Vitals

## 相关记忆

- [[tech-stack]] - 技术栈规范
- [[seo-implementation-complete]] - SEO实现记录
- [[design-breadcrumb]] - 设计规范示例
