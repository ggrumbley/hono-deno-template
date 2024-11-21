import { AppOpenAPI } from '../types.ts';
import denoJSON from '../../deno.json' with { type: 'json'}

const configureOpenAPI = (app: AppOpenAPI) => {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: denoJSON.version,
      title: 'Tasks API',
    },
  });
};

export default configureOpenAPI;
