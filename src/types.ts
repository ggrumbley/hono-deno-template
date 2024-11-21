import type { PinoLogger } from 'hono-pino';
import type { OpenAPIHono } from '@hono/zod-openapi';

export interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;
