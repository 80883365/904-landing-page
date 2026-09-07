# CMS 图片管理规则

## 唯一图库

Decap CMS 的所有可编辑图片统一存放在：

```text
public/images/
```

CMS 配置只保留全局媒体设置：

```yaml
media_folder: "public/images"
public_folder: "/images"
```

不要在 `products`、`blog` 集合或单个 `image` 字段设置 `media_folder` / `public_folder`。

## 原因

本项目的 Decap CMS 本地代理在集合级子目录（例如 `public/images/products/`、`public/images/blog/`）下的图片选择器行为不稳定：产品/博客编辑页以及 Markdown 正文的“插入图片”可能显示 `No assets found`。

使用单一根目录后，顶部 Media、产品/博客特色图字段和 Markdown 正文插图都应读取同一个稳定的图库。

## 文件命名

- 使用能表达图片实际用途或主题的英文小写文件名，例如 `coal-based-activated-carbon.webp`、`iodine-number-explained.webp`。
- 文件名不需要为了 CMS 分类添加 `product-`、`blog-` 等前缀。
- 使用连字符 `-` 分隔单词；避免空格、中文、特殊字符和重复文件名。
- 优先使用 WebP；建议上传前压缩并使用合适尺寸。

## 内容引用

产品和博客 Markdown 的 `heroImage`，以及页面中的 CMS 图片路径，必须使用：

```yaml
heroImage: "/images/your-image-name.webp"
```

不要使用 `/images/products/...`、`/images/blog/...`，也不要引用 `src/assets/` 作为 CMS 上传图片路径。

## 修改与排查

1. 新图片直接上传到 CMS，或手动放入 `public/images/`。
2. 手动放图后，强制刷新 CMS（`Ctrl + Shift + R`）再选择图片。
3. 本地编辑时必须同时运行网站开发服务和 `npm run cms`。
4. 若图片选择器为空，先确认 `public/images/` 中存在图片，并确认 `public/admin/config.yml` 仍只有全局媒体配置；不要通过恢复子文件夹配置来处理。
