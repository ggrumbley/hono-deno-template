import type { MiddlewareHandler, Context, Next } from '@hono/zod-openapi/types';

const serveEmojiFavicon =
  (emoji: string): MiddlewareHandler =>
  (c: Context, next: Next) => {
    if (c.req.path === '/favicon.ico') {
      c.header('Content-Type', 'image/svg+xml');
      return c.body(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" x="-0.1em" font-size="90">${emoji}</text></svg>`
      );
    }
    return next();
  };

export default serveEmojiFavicon;
