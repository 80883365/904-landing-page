# CMS 后台图库使用说明

## ✅ 问题已修复

已修复 Decap CMS 后台图库配置，现在可以正确显示 `products/` 和 `blog/` 文件夹。

---

## 📁 图片文件夹结构

```
public/images/
├── products/       # 产品特色图片
├── blog/          # 博客文章特色图片
└── placeholders/  # 通用占位图片
```

---

## 🎯 如何使用图库

### 方法 1：编辑产品时访问产品图库

1. 登录 CMS 后台：`http://localhost:4321/admin/`
2. 点击左侧 **Products** 集合
3. 打开任意产品进行编辑
4. 点击 **Featured Image** 字段的"Choose an image"按钮
5. 图库会**自动显示** `public/images/products/` 文件夹的所有图片

### 方法 2：编辑博客时访问博客图库

1. 登录 CMS 后台
2. 点击左侧 **Blog** 集合
3. 打开任意文章进行编辑
4. 点击 **Featured Image** 字段的"Choose an image"按钮
5. 图库会**自动显示** `public/images/blog/` 文件夹的所有图片

### 方法 3：全局图库（所有文件夹）

1. 在 CMS 后台顶部导航栏，点击 **Media** 按钮
2. 可以看到 `public/images/` 下的所有子文件夹：
   - `products/`
   - `blog/`
   - `placeholders/`

---

## 🔧 技术说明

### 配置修改内容

在 `public/admin/config.yml` 中：

**全局图库配置**（第 46-47 行）：
```yaml
media_folder: "public/images"
public_folder: "/images"
```

**产品集合专属图库**（第 66-67 行）：
```yaml
media_folder: "public/images/products"
public_folder: "/images/products"
```

**博客集合专属图库**（第 109-110 行）：
```yaml
media_folder: "public/images/blog"
public_folder: "/images/blog"
```

### 工作原理

- **编辑产品时**：图库自动切换到 `products/` 文件夹
- **编辑博客时**：图库自动切换到 `blog/` 文件夹
- **全局图库**：显示所有文件夹（`products/`、`blog/`、`placeholders/`）

---

## 🚀 启动 CMS

### 本地开发环境

需要同时运行两个命令：

**终端 1 - Astro 开发服务器**：
```bash
npm run dev
```

**终端 2 - CMS 代理服务器**：
```bash
npm run cms
```

然后访问：
- 网站：`http://localhost:4321`
- CMS 后台：`http://localhost:4321/admin/`

---

## 📸 当前图片资源

### Products 文件夹（6 张）
- `coconut-shell-activated-carbon.webp`
- `coal-based-activated-carbon.webp`
- `powdered-activated-carbon.webp`
- `pelletized-activated-carbon.webp`
- `impregnated-activated-carbon.webp`
- `honeycomb-activated-carbon.webp`

### Blog 文件夹（12 张）
- `activated-carbon-vs-alternatives.webp`
- `activated-carbon-water-treatment-guide.webp`
- `activated-carbon-mesh-sizes-guide.webp`
- `coconut-shell-vs-coal-activated-carbon.webp`
- `iodine-number-activated-carbon-guide.webp`
- `activated-carbon-market-trends-2026.webp`
- `activated-carbon-pharmaceutical-industry.webp`
- `activated-carbon-safety-handling-storage.webp`
- `buying-bulk-activated-carbon-guide.webp`
- `activated-carbon-craft-beverage-production.webp`
- `activated-carbon-toc-reduction.webp`
- `activated-carbon-regeneration-guide.webp`

---

## ❓ 常见问题

### Q: 为什么全局图库看不到子文件夹？
**A**: 需要点击文件夹图标进入子目录，或者在编辑产品/博客时使用集合专属图库。

### Q: 上传图片时会保存到哪里？
**A**: 
- 在 Products 集合中上传 → 保存到 `public/images/products/`
- 在 Blog 集合中上传 → 保存到 `public/images/blog/`
- 在全局图库上传 → 保存到 `public/images/`

### Q: 如何添加新图片到图库？
**A**: 两种方式：
1. 通过 CMS 后台上传（自动分类）
2. 手动将图片文件复制到对应文件夹（需要刷新 CMS）

---

## ✅ 验证步骤

1. 启动服务：`npm run dev` + `npm run cms`
2. 访问 CMS：`http://localhost:4321/admin/`
3. 进入 Products → 编辑任意产品
4. 点击 Featured Image → 应该能看到所有产品图片
5. 进入 Blog → 编辑任意文章
6. 点击 Featured Image → 应该能看到所有博客图片

---

**修复完成时间**：2026-07-15
