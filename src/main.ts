import app from './app.ts';
import ENV from './env.ts';

Deno.serve({ port: ENV.PORT }, app.fetch);
