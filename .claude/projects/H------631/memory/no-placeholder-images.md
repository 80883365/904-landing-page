---
name: no-placeholder-images
description: 严格禁止使用占位图，所有图片必须是真实的、不同的、描述性的
metadata:
  type: project
---

# 图片使用强制规则（最高优先级）

## 🚨 绝对禁止事项

### 禁止 1: 使用占位图片

**要求**: 绝对不允许使用"占位图"、"placeholder"、"dummy"等临时图片

**错误示例**:
```astro
❌ import placeholder from "../assets/images/placeholder.webp";
❌ import dummy from "../assets/images/dummy.jpg";
❌ 使用同一张图片复制多份
```

### 禁止 2: 图片内容重复

**要求**: 每张图片必须是**不同的真实内容**，即使文件名不同

**错误示例**:
```bash
❌ cp image.webp industry-water.webp
❌ cp image.webp industry-air.webp
# 这是两个文件名不同但内容相同的图片 - 绝对禁止！
```

**正确做法**:
```bash
✅ 下载/拍摄不同的真实图片
✅ 每张图片展示不同的内容
✅ 文件名准确描述图片内容
```

### 禁止 3: 通用/模糊的文件名

**错误示例**:
```
❌ image1.webp
❌ photo.webp
❌ pic.jpg
❌ temp.webp
```

**正确示例**:
```
✅ coconut-shell-activated-carbon-granules.webp
✅ water-treatment-plant-carbon-filter.webp
✅ industrial-air-purification-system.webp
```

## ✅ 强制要求

### 要求 1: 使用 OSS 源图片并复制重命名

**初始阶段操作**:
如果没有真实图片，必须：
1. 下载 OSS 源图片: `https://dreve51.oss-cn-beijing.aliyuncs.com/dummy.jpeg`
2. **复制并重命名**为描述性文件名
3. 虽然当前内容相同，但文件名必须反映将来的真实内容

**示例**:
```bash
# 正确：复制同一张图片，但用描述性文件名
cp base.webp industry-water-treatment.webp
cp base.webp industry-air-purification.webp  
cp base.webp gold-recovery-process.webp

# 每个文件名都描述将来会替换成什么内容
```

**关键点**:
- ✅ 文件名必须描述性（反映真实用途）
- ✅ Alt 文本必须准确（描述应该显示的内容）
- ✅ 为后期替换做好准备
- ✅ 满足 SEO 要求（文件名包含关键词）

### 要求 2: Alt 文本描述真实用途（不是占位图）

**重要**: Alt 文本应该描述**应该显示的内容**，而不是"占位图"

**正确示例**:
```astro
✅ alt="Municipal water treatment plant using granular activated carbon filtration"
✅ alt="Industrial HVAC air purification system with activated carbon filters"
✅ alt="Gold recovery CIP circuit using coconut shell activated carbon"
```

**错误示例**:
```astro
❌ alt="Placeholder image"
❌ alt="Temporary photo"
❌ alt="Image will be replaced"
```

### 要求 3: 后期逐一替换

**流程**:
1. 建站初期：使用 OSS 源图片，描述性文件名 ✅
2. 建站后期：逐一替换为真实图片
3. 替换时：保持文件名不变，只替换内容
4. 验证：alt 文本仍然准确

### 要求 2: 图片必须有描述性的 alt 文本

**SEO 要求**:
- 每张图片的 alt 必须准确描述图片内容
- 包含相关关键词（自然融入）
- 125 字符以内
- 不要使用"image", "photo", "picture"等废话

**正确示例**:
```astro
✅ alt="Granular coconut shell activated carbon for water purification"
✅ alt="Industrial water treatment facility with carbon filtration system"
✅ alt="HVAC air purification unit using activated carbon filters"
```

**错误示例**:
```astro
❌ alt="Image 1"
❌ alt="Photo"
❌ alt="Product image"
❌ alt=""  // 空 alt
```

### 要求 3: 文件名必须描述内容

**规则**:
- 使用英文
- kebab-case (小写-连字符)
- 包含关键词
- 准确描述图片内容

**正确示例**:
```
✅ coconut-shell-carbon-production-line.webp
✅ water-treatment-activated-carbon-filter.webp
✅ gold-recovery-cip-cil-carbon-granules.webp
✅ pharmaceutical-decolorization-lab-testing.webp
```

## 🎯 实际操作流程

### 添加新图片的正确流程

```bash
# 1. 获取真实图片
# - 购买高质量库存图
# - 拍摄真实的产品/场景照片
# - 获得授权的第三方图片

# 2. 优化图片
# - TinyPNG.com 压缩
# - 转换为 WebP 格式
# - 调整到推荐尺寸

# 3. 使用描述性文件名
mv downloaded-image.jpg coconut-shell-activated-carbon-granules.webp

# 4. 放到正确的文件夹
cp coconut-shell-activated-carbon-granules.webp \
   src/assets/images/homepage/industry-water-treatment.webp

# 5. 在代码中使用，添加准确的 alt
import waterTreatment from "../assets/images/homepage/industry-water-treatment.webp";
<OptimizedImage 
  src={waterTreatment} 
  alt="Granular activated carbon used in municipal water treatment plant"
/>
```

### 检查现有图片的流程

```bash
# 1. 检查文件名是否描述性
ls src/assets/images/*/*.webp | grep -E "(image|photo|pic|temp|dummy|placeholder)"
# 如果有结果 → 需要重命名

# 2. 检查是否有内容重复的图片
cd src/assets/images
find . -type f -name "*.webp" -exec md5sum {} \; | sort -k1 | uniq -d
# 如果有结果 → 需要替换为不同的图片

# 3. 检查 alt 文本
grep -r "alt=\"\"" src/pages/
grep -r "alt=\"image" src/pages/
grep -r "alt=\"photo" src/pages/
# 如果有结果 → 需要更新 alt 文本
```

## 📊 图片来源建议

### 推荐的图片来源

1. **自己拍摄** (最佳)
   - 产品实物照片
   - 工厂生产线
   - 应用场景实拍

2. **购买库存图** (推荐)
   - Unsplash (免费，高质量)
   - Pexels (免费)
   - Shutterstock (付费，专业)
   - iStock (付费)

3. **客户授权** (需获得许可)
   - 客户应用案例照片
   - 现场安装照片

### 禁止的图片来源

❌ 竞争对手网站的图片（侵权）  
❌ 未经许可的第三方图片  
❌ 低质量的网络图片  
❌ 带水印的图片  

## 🔍 Code Review 检查清单

每次添加图片前必须确认:

- [ ] 图片是真实的、不是占位图？
- [ ] 内容与其他图片不重复？（运行 md5sum 检查）
- [ ] 文件名是描述性的？（不是 image1.webp 之类）
- [ ] 有准确的 alt 文本？（不是空的或"image"）
- [ ] 文件名包含相关关键词？
- [ ] 图片已优化？（< 200KB，WebP 格式）
- [ ] 放在正确的页面文件夹？

## ⚠️ 违规处理

**发现占位图或重复图片**:
1. 立即停止开发
2. 替换为真实、不同的图片
3. 更新 alt 文本
4. 重新测试

**不允许的借口**:
- ❌ "先用占位图，以后再换"
- ❌ "现在没有真实图片"
- ❌ "复制一下快一点"

**正确做法**:
- ✅ 立即获取真实图片
- ✅ 如果暂时没有，不要上线该功能
- ✅ 宁可少一个页面，也不用占位图

## 📖 相关规范

- [[image-organization-rules]] - 图片文件夹组织规则
- [[seo-rules]] - SEO 技术规范中的图片要求

**Why**:
- 占位图严重损害 SEO
- 重复图片被搜索引擎惩罚
- 用户体验差
- 不专业

**How to apply**:
- 添加图片前运行 md5sum 检查
- Code Review 时验证图片唯一性
- 拒绝合并包含占位图的 PR
- 定期审计现有图片
