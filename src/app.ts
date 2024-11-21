import { OpenAPIHono } from '@hono/zod-openapi';
import notFound from './middlewares/not-found.ts';
import onError from './middlewares/on-error.ts';
import logger from './middlewares/logger.ts';
import serveEmojiFavicon from './middlewares/serve-emoji-favicon.ts';
import configureOpenAPI from './utils/configure-open-api.ts';
import type { AppBindings } from './types.ts';

const app = new OpenAPIHono<AppBindings>({ strict: false });

app.use(serveEmojiFavicon('👩‍🎤'));
app.use(logger());
app.notFound(notFound);
app.onError(onError);

app.get('/', (c) => {
  return c.text('Hono? Node... Oden... Deno... Done.');
});

app.get('/error', (c) => {
  c.status(422);
  throw new Error('SPLOSIONS!?!?!?!?!');
});

configureOpenAPI(app);

export default app;
