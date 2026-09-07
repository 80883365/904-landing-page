# public/images/ 文件夹说明

## ❓ 为什么 public/images/products/ 和 blog/ 是空的？

### 简短回答

**这是正常的！** 产品确实有特色图片，只是不在这个位置。

---

## ✅ 产品特色图片的实际位置

### 当前所有产品使用的图片

**位置**: 
```
src/assets/images/shared/product-card.webp
```

**大小**: 27KB (26840 bytes)  
**格式**: WebP  
**状态**: ✅ **正在网站上显示**

### 如何验证图片在显示？

**方法 1: 访问网站**
```
http://localhost:4327/products/
```
您会看到所有 6 个产品卡片都有图片。

**方法 2: 访问单个产品**
```
http://localhost:4327/products/coconut-shell-activated-carbon
```
产品详情页顶部有特色图片。

---

## 📂 两套图片系统详解

### 系统 1: src/assets/images/ (开发人员使用)

**用途**: 代码中引用的所有图片

**当前内容**:
```
src/assets/images/
├── homepage/          (5 张图片) ✅ 正在使用
├── about/             (2 张图片) ✅ 正在使用
├── applications/      (5 张图片) ✅ 正在使用
├── quality/           (1 张图片) ✅ 正在使用
└── shared/            (2 张图片) ✅ 正在使用
    ├── blog-wide.webp       ← 所有博客文章的默认图
    └── product-card.webp    ← 所有产品的默认图
```

**特点**:
- ✅ 构建时通过 Sharp 优化
- ✅ 自动生成响应式尺寸
- ✅ 添加哈希文件名（缓存优化）
- ✅ 性能最佳

### 系统 2: public/images/ (CMS 用户使用)

**用途**: CMS 上传图片的存储位置

**当前内容**:
```
public/images/
├── products/      ← 空的（正常状态）
└── blog/          ← 空的（正常状态）
```

**为什么是空的？**
- 这个文件夹**只在通过 CMS 上传图片时**才会有内容
- 目前还没有通过 CMS 上传过产品或博客图片
- **空的是正常状态**

**什么时候会有内容？**
1. 打开 CMS: `http://localhost:4321/admin/`
2. 编辑产品或博客
3. 上传新图片
4. 图片会自动保存到这里

---

## 🔄 产品图片的工作流程

### 当前实现（默认图）

```
1. 产品 Markdown 文件
   ↓
   没有设置 heroImage 字段
   ↓
2. 产品页面代码
   ↓
   const heroImage = d.heroImage || heroImg;
   (使用 fallback 机制)
   ↓
3. 显示默认图
   ↓
   src/assets/images/shared/product-card.webp
   ↓
4. 网站显示
   ✅ 所有产品都有图片
```

### 未来实现（真实产品图）

有两种方式为产品添加真实图片：

#### 方式 1: 开发人员手动添加（推荐）

```bash
# 1. 准备产品图片
cp ~/product-photo.webp src/assets/images/shared/coconut-shell-product.webp

# 2. 更新产品 Markdown
# src/content/products/coconut-shell-activated-carbon.md
---
heroImage: ../../assets/images/shared/coconut-shell-product.webp
---

# 3. 重新构建
npm run build
```

#### 方式 2: 通过 CMS 上传（目前不可用）

```
1. 打开 CMS
2. 编辑产品
3. 上传图片 → 保存到 public/images/products/
4. 保存产品

⚠️ 注意: 当前这种方式上传的图片不会在前端显示
（需要额外开发才能实现）
```

---

## 🎯 总结

### 关键要点

1. **产品有图片吗？**
   - ✅ 有！所有产品都使用 `src/assets/images/shared/product-card.webp`

2. **为什么 public/images/ 是空的？**
   - ✅ 正常！这是 CMS 上传的存储位置，还没有上传过

3. **图片在网站上显示吗？**
   - ✅ 显示！所有产品页面都有图片

4. **两个文件夹的关系？**
   - `src/assets/` - 代码使用 ✅ 当前在用
   - `public/images/` - CMS 上传 ⚠️ 暂未使用

### 当前状态

| 项目 | 状态 |
|------|------|
| 产品有特色图片 | ✅ 有（默认占位图） |
| 图片在网站显示 | ✅ 显示正常 |
| src/assets/images/ | ✅ 有 15 张图片 |
| public/images/ | ✅ 空的（正常） |

---

## 📸 如何查看当前的产品图片？

### 在浏览器中查看

1. 启动开发服务器（如果还没启动）:
   ```bash
   npm run dev
   ```

2. 访问产品列表:
   ```
   http://localhost:4327/products/
   ```

3. 点击任意产品查看详情

4. 您会看到产品特色图片显示在顶部

### 在文件系统中查看

1. 打开文件夹:
   ```
   H:\新站测试631\src\assets\images\shared\
   ```

2. 双击 `product-card.webp` 查看图片

3. 这就是当前所有产品使用的默认图

---

## 🔮 下一步操作（可选）

### 如果您想为每个产品添加真实图片

**步骤**:

1. **准备 6 张产品照片**
   - 椰壳活性炭
   - 煤质活性炭
   - 蜂窝活性炭
   - 浸渍活性炭
   - 柱状活性炭
   - 粉状活性炭

2. **优化图片**
   - 推荐尺寸: 1200x800 像素
   - 格式: WebP
   - 大小: < 100KB

3. **添加到项目**
   ```bash
   cp ~/coconut-shell.webp src/assets/images/shared/
   cp ~/coal-based.webp src/assets/images/shared/
   # ... 其他产品
   ```

4. **更新产品 Markdown**
   ```yaml
   # src/content/products/coconut-shell-activated-carbon.md
   ---
   heroImage: ../../assets/images/shared/coconut-shell.webp
   ---
   ```

5. **重新构建和测试**
   ```bash
   npm run build
   npm run preview
   ```

### 如果保持使用默认图

**当前状态完全可以**:
- ✅ 视觉统一
- ✅ 性能优秀
- ✅ 快速上线
- ✅ 未来可随时替换

---

## ❓ 常见问题

### Q1: public/images/ 什么时候会有内容？

**A**: 只有通过 CMS 上传图片时。目前还没有上传过，所以是空的。

### Q2: 为什么不把图片放在 public/images/?

**A**: 根据项目规则，代码使用的图片必须在 `src/assets/images/`，这样才能获得 Sharp 优化和响应式处理。

### Q3: CMS 上传的图片能在前端显示吗？

**A**: 目前不能。需要额外开发才能实现。当前策略是使用 `src/assets/` 中的图片。

### Q4: 所有产品都用同一张图片合理吗？

**A**: 合理。这是常见的渐进式策略：
- 先用默认图快速上线
- 后续逐步替换为真实产品图
- 视觉统一，用户体验好

---

## 📖 相关文档

- [图片管理强制规范.md](./图片管理强制规范.md) - 完整的图片管理规则
- [图片管理规则重构完成报告.md](./图片管理规则重构完成报告.md) - 重构报告
- [项目图片存放逻辑说明.md](./项目图片存放逻辑说明.md) - 详细的图片逻辑

---

**文档创建**: 2026-07-15  
**状态**: ✅ public/images/ 空的是正常的  
**产品图片**: ✅ 正在显示，位于 src/assets/images/shared/
