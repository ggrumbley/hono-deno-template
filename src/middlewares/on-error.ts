import process from 'node:process';
import type { ErrorHandler, Context } from '@hono/zod-openapi/types';
import type { StatusCode } from 'hono/utils/http-status';

import { INTERNAL_SERVER_ERROR, OK } from '../constants/http-status-codes.ts';

const onError: ErrorHandler = (err: Error, c: Context) => {
  const currentStatus =
    'status' in err ? err.status : c.newResponse(null).status;
  const statusCode =
    currentStatus !== OK
      ? (currentStatus as StatusCode)
      : INTERNAL_SERVER_ERROR;
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV;

  return c.json(
    {
      message: err.message,

      stack: env !== 'production' ? err.stack : undefined,
    },
    statusCode
  );
};

export default onError;
