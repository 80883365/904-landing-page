# 表单提交规范（强制）— 全站统一提交行为

## 背景 / 教训

联系页 WhatsApp 链接曾因"手写代码没接埋点"导致转化统计漏报（见 WHATSAPP-TRACKING.md）。表单存在同类风险：全站的提交行为（速度优化、元数据采集、跳转感谢页）分散在组件里，如果新页面手写独立 form 而不接线，会退回慢提交、邮件缺 IP/设备信息、不跳感谢页的旧状态。

## 强制规则

1. **新建任何询盘表单，首选复用 `src/components/ContactForm.astro`**——IP 预取、提交元数据（IP/设备/时间/来源页）、成功跳转 `/thank-you` 全部自动继承，禁止重复实现。

2. **确需手写独立 `<form>`（如 contact.astro 的页面级表单）时，必须逐项核对以下清单，缺一不可**：
   - [ ] `action="https://api.web3forms.com/submit"` + `access_key` 取 `SITE.web3formsKey`（禁止硬编码 Key）
   - [ ] 提交 handler 中 `import { appendSubmissionMeta } from "../scripts/form-meta"`，构建 FormData 后、fetch 前调用 `await appendSubmissionMeta(body)`
   - [ ] 成功（`data.success === true`）后 `form.reset()` + `window.location.assign("/thank-you/")`
   - [ ] 失败显示行内错误提示，不跳转
   - [ ] 隐藏字段 `redirect` 指向 `${SITE.url}/thank-you`（无 JS 兜底）
   - [ ] 字段仅限 Name / Email / Phone / Message（见 TECH-STACK.md）

3. **禁止**在表单提交 handler 里额外单独采集 IP / UA / 时间等元数据——统一走 `form-meta.ts`，需要新字段时扩展该模块，全站表单同步受益。

4. **性能约定（已实现，勿回退）**：
   - IP 在用户首次聚焦表单时后台预取（`prefetchIp`），提交时最多等待 500ms
   - `BaseLayout` 已含对 `api.web3forms.com` 的 `preconnect`，不得移除

## 验证方式

线上提交一次测试表单，确认：邮件含 client_ip / client_device / submission_time / submission_page 字段；提交到跳转感谢页在 1 秒左右；感谢页加载时 dataLayer 出现 `generate_lead`。
