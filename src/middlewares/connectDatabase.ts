import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';

import createConnection from 'database';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

export default function (handler: NextApiHandler): NextApiHandler {
  return async (req: ApiRequest, res: NextApiResponse) => {
    const client = await createConnection();

    req.db = client.manager;

    return handler(req, res);
  };
}
