# CMS 后台图库看不到图片 - 完整修复步骤

## ✅ 诊断结果

1. **配置文件已正确设置**：
   - Products: `public/images/products/`
   - Blog: `public/images/blog/`

2. **图片文件存在**：
   - Products 文件夹：6 张图片
   - Blog 文件夹：12 张图片

3. **CMS 代理服务器正在运行**（端口 8081）

---

## 🔧 修复步骤

### 步骤 1：重启 CMS 代理服务器

当前服务器正在运行但可能没有加载最新配置。需要重启：

```bash
# 1. 找到 CMS 进程并停止
ps aux | grep decap-server
kill -9 15184  # 替换为实际的 PID

# 2. 重新启动
npm run cms
```

**或者直接在终端按 `Ctrl+C` 停止，然后重新运行 `npm run cms`**

---

### 步骤 2：清除浏览器缓存

1. 打开 CMS 后台：`http://localhost:4321/admin/`
2. 按 `Ctrl + Shift + R`（Windows）或 `Cmd + Shift + R`（Mac）**硬刷新**
3. 或者按 `F12` 打开开发者工具 → Network 标签 → 勾选 "Disable cache"

---

### 步骤 3：验证图片显示

#### 测试 1：编辑产品时查看图库

1. 进入 CMS 后台
2. 点击左侧 **Products**
3. 选择任意产品（如 "Coconut Shell Activated Carbon"）
4. 滚动到 **Featured Image** 字段
5. 点击 "Choose an image" 按钮

**预期结果**：应该看到 6 张产品图片：
- coconut-shell-activated-carbon.webp
- coal-based-activated-carbon.webp
- powdered-activated-carbon.webp
- pelletized-activated-carbon.webp
- impregnated-activated-carbon.webp
- honeycomb-activated-carbon.webp

#### 测试 2：编辑博客时查看图库

1. 点击左侧 **Blog**
2. 选择任意文章
3. 滚动到 **Featured Image** 字段
4. 点击 "Choose an image" 按钮

**预期结果**：应该看到 12 张博客图片

---

### 步骤 4：如果仍然看不到图片

可能的原因和解决方案：

#### 原因 1：Decap CMS 代理模式的限制

Decap CMS 在使用 `proxy` backend 时，媒体库可能无法自动扫描已存在的图片文件。

**解决方案 A：手动上传一张图片**

1. 在 Featured Image 字段点击 "Choose an image"
2. 点击 "Upload" 按钮
3. 上传任意图片到 `products/` 或 `blog/` 文件夹
4. 上传后，媒体库应该会刷新并显示该文件夹的所有图片

**解决方案 B：使用文件路径而不是媒体库**

如果媒体库仍然无法正常工作，可以直接在 Featured Image 字段中输入路径：

```
/images/products/coconut-shell-activated-carbon.webp
```

#### 原因 2：配置文件语法错误

验证配置文件是否有效：

```bash
# 检查 YAML 语法
npm install -g js-yaml
js-yaml public/admin/config.yml
```

---

## 📋 完整启动流程（推荐）

每次使用 CMS 时，按照以下步骤启动：

```bash
# 终端 1：启动 Astro 开发服务器
npm run dev

# 终端 2：启动 CMS 代理服务器
npm run cms
```

然后访问：
- 网站：http://localhost:4321
- CMS 后台：http://localhost:4321/admin/

---

## 🐛 调试方法

### 检查浏览器控制台

1. 打开 CMS 后台
2. 按 `F12` 打开开发者工具
3. 切换到 **Console** 标签页
4. 查看是否有红色错误信息

常见错误：
- **404 错误**：图片路径不正确
- **CORS 错误**：代理服务器未启动
- **Network 错误**：防火墙或端口被占用

### 检查网络请求

1. 开发者工具 → **Network** 标签页
2. 在 CMS 中打开图片选择器
3. 查看是否有请求到 `http://localhost:8081/api/v1`
4. 检查请求是否返回图片列表

---

## 🎯 当前配置说明

### config.yml 关键配置

```yaml
# 全局媒体库（根目录）
media_folder: "public/images"
public_folder: "/images"

# Products 集合专属图库
collections:
  - name: "products"
    media_folder: "public/images/products"  # ← 编辑产品时使用此路径
    public_folder: "/images/products"

  - name: "blog"
    media_folder: "public/images/blog"      # ← 编辑博客时使用此路径
    public_folder: "/images/blog"
```

### 文件夹结构

```
public/images/
├── products/        ← 6 张产品图片
│   ├── coconut-shell-activated-carbon.webp
│   ├── coal-based-activated-carbon.webp
│   └── ...
└── blog/           ← 12 张博客图片
    ├── activated-carbon-vs-alternatives.webp
    ├── activated-carbon-water-treatment-guide.webp
    └── ...
```

---

## ❓ 如果以上步骤都无法解决

请提供以下信息：

1. **浏览器控制台的完整错误信息**（截图或复制文本）
2. **Network 标签页中与媒体库相关的请求**
3. **您具体在哪个位置看不到图片**：
   - [ ] 全局 Media 按钮
   - [ ] Products → Featured Image
   - [ ] Blog → Featured Image
   - [ ] Markdown 编辑器中的图片按钮

---

**最后修改时间**：2026-07-15 15:00
