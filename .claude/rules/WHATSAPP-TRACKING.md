# WhatsApp 链接转化追踪规范（强制）

## 背景 / 教训

曾经出现过：感谢页的 WhatsApp 链接能触发 GTM 转化（`whatsapp_click` 事件），而联系页的 WhatsApp 链接功能完全相同却没有埋点，导致转化统计漏报。**同一功能的外链在全站各页面必须有一致的追踪行为。**

## 强制规则

1. **全站所有 `wa.me`（及未来其他 WhatsApp 形式）链接的点击，统一由 `BaseLayout.astro` 中的全局事件委托脚本自动追踪**，向 dataLayer 推送：

   ```js
   {
     event: "whatsapp_click",
     page_location: <点击时所在页面路径>,
     whatsapp_url: <完整 wa.me 链接>
   }
   ```

2. **禁止在单个页面/组件里给 WhatsApp 链接单独写点击埋点**——会造成重复推送（同一事件推两次）或漏埋。已有的局部埋点必须删除（thank-you.astro 已清理）。

3. **新建页面 / 着陆页 / 组件时**：
   - 只要使用 `BaseLayout`，页面上的任何 `wa.me` 链接自动被追踪，无需任何额外代码。
   - 如果某页面不用 `BaseLayout`（如 `admin.astro`），且该页含 WhatsApp 链接，必须手动引入同等追踪逻辑。
   - WhatsApp 号码统一使用 `https://wa.me/8617335791762`（与 `CONTACT.whatsapp` 一致），不要硬编码不同号码。

4. **新增其他外部转化链接（如微信客服、Skype、Telegram）时**，必须同步扩展 BaseLayout 的全局追踪脚本，而不是在页面内单独埋点，避免再次出现"有的页面能统计、有的不能"。

## 验证方式

任一页面点击 WhatsApp 链接后，浏览器控制台执行：
`dataLayer.filter(e => e.event === 'whatsapp_click')`
应看到一条记录且 `page_location` 为当前页面路径。
