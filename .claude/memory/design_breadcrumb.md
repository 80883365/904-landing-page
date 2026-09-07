---
name: design-breadcrumb
description: Breadcrumb navigation design rule - single line with ellipsis overflow
metadata:
  type: feedback
---

Breadcrumb navigation must display on a single line. When content overflows, truncate with ellipsis instead of wrapping to multiple lines.

**Why:** Multi-line breadcrumbs break visual hierarchy and create layout inconsistency, especially on mobile devices. A single-line constraint keeps navigation compact and predictable.

**How to apply:** Use CSS `truncate` or equivalent (`overflow: hidden; text-overflow: ellipsis; white-space: nowrap`) on breadcrumb containers or individual breadcrumb items. Test with long page titles to ensure overflow handling works correctly.
