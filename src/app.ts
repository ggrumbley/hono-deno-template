import { OpenAPIHono } from '@hono/zod-openapi';
import notFound from './middlewares/not-found.ts';
import onError from './middlewares/on-error.ts';

const app = new OpenAPIHono();

app.get('/', (c) => {
  return c.text('Hono? Node... Oden... Deno... Done.');
});

app.get('/error', (c) => {
  c.status(422);
  throw new Error('SPLOSIONS!?!?!?!?!');
});

app.notFound(notFound);
app.onError(onError);

export default app;
