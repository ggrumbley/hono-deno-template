import type { NotFoundHandler, Context } from '@hono/zod-openapi/types';

import { NOT_FOUND } from '../constants/http-status-codes.ts';
import { NOT_FOUND as NOT_FOUND_MESSAGE } from '../constants/http-status-phrases.ts';

const notFound: NotFoundHandler = (c: Context) => {
  return c.json(
    {
      message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
    },
    NOT_FOUND
  );
};

export default notFound;
