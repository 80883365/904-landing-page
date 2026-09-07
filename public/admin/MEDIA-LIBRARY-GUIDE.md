# Decap CMS 媒体库使用指南

## 问题诊断

Decap CMS 的媒体库在不同场景下有不同的行为。请告诉我您遇到的具体情况：

### 场景 1：在全局媒体库中看不到子文件夹

**位置**：CMS 后台顶部 "Media" 按钮

**预期行为**：应该能看到 `products/` 和 `blog/` 文件夹

**实际问题**：只能看到 `public/images/` 根目录，看不到子文件夹


### 场景 2：编辑产品/博客时看不到图片

**位置**：编辑产品/博客 → Featured Image 字段 → "Choose an image"

**预期行为**：
- 编辑产品时：应该显示 `public/images/products/` 的图片
- 编辑博客时：应该显示 `public/images/blog/` 的图片

**实际问题**：图片选择器是空的


### 场景 3：Markdown 编辑器中插入图片

**位置**：编辑产品/博客 → Body content 字段 → 工具栏的图片按钮

**预期行为**：应该能从媒体库选择图片插入到正文中

**实际问题**：看不到已有的图片


## 请回答以下问题

1. **您当前在哪个位置无法看到图片？**
   - [ ] 全局媒体库（顶部 Media 按钮）
   - [ ] 编辑产品时的 Featured Image 字段
   - [ ] 编辑博客时的 Featured Image 字段
   - [ ] Markdown 编辑器中的图片插入

2. **CMS 代理服务器是否正在运行？**
   需要同时运行：
   ```bash
   npm run dev      # 终端 1
   npm run cms      # 终端 2
   ```

3. **浏览器控制台是否有错误？**
   按 F12 打开开发者工具 → Console 标签页

4. **您能看到侧边栏的 "Products" 和 "Blog" 集合吗？**

5. **点击 Products → 选择任意产品 → Featured Image 字段时，能看到什么？**
   - [ ] 完全空白
   - [ ] 有上传按钮但看不到已有图片
   - [ ] 看到了图片但不是 products 文件夹的
   - [ ] 其他情况

