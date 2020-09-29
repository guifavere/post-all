import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';

import createConnection from 'database';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

export default function (handler: NextApiHandler): NextApiHandler {
  return async (req: ApiRequest, res: NextApiResponse) => {
    try {
      const client = await createConnection();

      req.db = client.manager;

      handler(req, res);
    } catch (error) {
      res.status(500).json({ message: 'Error establishing a database connection' });
    }
  };
}
