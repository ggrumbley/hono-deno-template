import { z } from 'zod';

const EnvSchema = z.object({
  DENO_ENV: z.string().default('dev'),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
});

const ENV = EnvSchema.parse(Deno.env.toObject());

export default ENV;
