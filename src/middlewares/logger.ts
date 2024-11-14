import { pinoLogger } from 'hono-pino';
import { pino } from 'pino';
import pretty from 'pino-pretty';
import { crypto } from '@std/crypto';
import ENV from '../env.ts';

const logger = () =>
  pinoLogger({
    pino: pino(
      {
        level: ENV.LOG_LEVEL,
      },

      ENV.DENO_ENV === 'production' ? undefined : pretty()
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });

export default logger;
