import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';

import connectDatabase from 'middlewares/connectDatabase';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

async function destroy(req: ApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  await req.db.delete('Tag', { id });

  res.status(200).json([]);
}

async function update(req: ApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const { name } = req.body;

  await req.db.update('Tag', { id }, { name });

  res.status(200).json([]);
}

async function handler(req: ApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      await destroy(req, res);
      break;
    case 'PUT':
      await update(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
