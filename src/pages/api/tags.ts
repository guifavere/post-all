import { NextApiResponse, NextApiRequest } from 'next';

import connectDatabase from 'middlewares/connectDatabase';
import Tag from 'entities/Tag';

async function create(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;
  const tag = new Tag(name);

  await req.db.save(tag);

  res.status(200).json([]);
}

async function index(req: NextApiRequest, res: NextApiResponse) {
  const tags = await req.db.find('Tag');

  res.status(200).json(tags);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      await create(req, res);
      break;
    case 'GET':
      await index(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
