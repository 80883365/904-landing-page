import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  // If request is for /admin or /admin/, serve the static HTML from public
  if (context.url.pathname === "/admin" || context.url.pathname === "/admin/") {
    const adminHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow, noarchive" />
    <title>Content Manager · CarboPure</title>
    <link rel="icon" type="image/png" href="/brand/zd-mining-favicon.png" />
  </head>
  <body>
    <!-- Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.6.0/dist/decap-cms.js"></script>
  </body>
</html>`;

    return new Response(adminHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  }

  return next();
});
