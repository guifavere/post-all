import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import createConnection from 'database';

export default function (handler: NextApiHandler): NextApiHandler {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await createConnection();

    req.db = client.manager;

    return handler(req, res);
  };
}
