---
name: image-organization-rules
description: 图片存放的强制规则 - 按页面分文件夹，禁止跨页面复用，禁止使用public/images
metadata:
  type: project
---

# 图片组织规则（强制执行）

## 🚨 核心规则（必须遵守）

### 规则 1: 按页面分文件夹存放

**要求**: 每个普通页面必须有自己独立的图片文件夹

**结构**:
```
src/assets/images/
├── homepage/         ← 首页的所有图片
├── about/            ← 关于页面的所有图片
├── applications/     ← 应用场景页的所有图片
├── quality/          ← 质量保证页的所有图片
├── contact/          ← 联系页面的所有图片（如有图片）
└── shared/           ← 仅用于博客和产品默认图
    ├── blog-wide.webp
    └── product-card.webp
```

### 规则 2: 禁止跨页面复用图片

**要求**: 
- ❌ **严格禁止** 不同普通页面之间共享图片
- ✅ **允许例外**: 调用 `shared/` 文件夹中的博客或产品默认图

**错误示例**:
```astro
// ❌ 错误 - about 页面使用 homepage 的图片
import img from "../assets/images/homepage/hero.webp";
```

**正确示例**:
```astro
// ✅ 正确 - about 页面使用自己文件夹的图片
import img from "../assets/images/about/facility.webp";

// ✅ 正确 - 使用 shared 中的博客/产品默认图
import blogImg from "../assets/images/shared/blog-wide.webp";
```

### 规则 3: 绝对禁止使用 public/images

**要求**: `public/images/` 文件夹**绝对不合规**，必须避免使用

**原因**:
- public/images/ 是 CMS 上传图片的存储位置
- 代码中引用的图片必须在 src/assets/images/ 中
- 两套系统严格分离，不可混用

**CMS 图片存放规则**:
```
public/images/
├── products/         ← CMS 上传的产品图片（仅供 CMS 使用）
└── blog/             ← CMS 上传的博客图片（仅供 CMS 使用）
```

**禁止操作**:
- ❌ 在代码中导入 public/images/ 的图片
- ❌ 在 src/assets/images/ 中引用 public/ 路径
- ❌ 将开发用图片放在 public/images/

## 📁 当前正确的文件结构

```
src/assets/images/
├── homepage/
│   ├── hero-wide.webp
│   ├── industry-water.webp
│   ├── industry-air.webp
│   ├── industry-gold.webp
│   └── industry-chem.webp
├── about/
│   ├── facility.webp
│   └── lab.webp
├── applications/
│   ├── water-treatment.webp
│   ├── air-purification.webp
│   ├── gold-recovery.webp
│   ├── food-beverage.webp
│   └── chemical-pharma.webp
├── quality/
│   └── lab.webp
└── shared/
    ├── blog-wide.webp      ← 博客默认图（可跨页面使用）
    └── product-card.webp   ← 产品默认图（可跨页面使用）
```

## 🎯 添加新页面时的操作流程

### 步骤 1: 创建页面专属文件夹

```bash
mkdir -p src/assets/images/new-page-name
```

### 步骤 2: 添加图片到该文件夹

```bash
cp ~/Downloads/image.webp src/assets/images/new-page-name/descriptive-name.webp
```

### 步骤 3: 在页面中导入

```astro
---
import myImage from "../assets/images/new-page-name/descriptive-name.webp";
---

<OptimizedImage src={myImage} alt="..." />
```

## ⚠️ 特殊情况处理

### 情况 1: 需要在多个普通页面使用同一张图片

**解决方案**: 复制图片到每个页面的文件夹

```bash
# 不要共享，而是复制
cp src/assets/images/about/photo.webp src/assets/images/contact/photo.webp
```

**原因**: 保持每个页面的独立性，便于维护和管理

### 情况 2: 博客或产品页需要默认图

**解决方案**: 使用 `shared/` 文件夹

```astro
// ✅ 博客页面可以使用
import blogImg from "../../assets/images/shared/blog-wide.webp";

// ✅ 产品页面可以使用
import productImg from "../../assets/images/shared/product-card.webp";
```

**说明**: `shared/` 文件夹是唯一允许跨页面复用的位置

### 情况 3: CMS 用户上传了图片

**当前行为**: 图片保存到 `public/images/products/` 或 `public/images/blog/`

**代码处理**: 
- ❌ 不在代码中引用这些图片
- ✅ 仅在 CMS 系统内部使用
- ✅ 未来可能实现自动同步到 src/assets/

## 🔍 检查清单

添加新图片前必须确认:

- [ ] 图片放在了对应页面的专属文件夹？
- [ ] 没有跨页面复用（shared 除外）？
- [ ] 没有使用 public/images/ 路径？
- [ ] 文件命名清晰有意义？
- [ ] 导入路径正确？

## 📖 相关规范

- [[tech-stack-constraints]] - 技术栈约束
- [[cms-configuration]] - CMS 配置规范

**Why**: 
- 清晰的文件组织便于维护
- 避免图片依赖混乱
- 每个页面的图片独立管理
- public/ 和 src/ 严格分离

**How to apply**:
- 新建页面时立即创建对应的图片文件夹
- 添加图片前检查是否在正确的文件夹
- Code Review 时检查图片路径是否符合规范
- 发现违规立即重构
