import { NextApiResponse, NextApiRequest } from 'next';
import { EntityManager } from 'typeorm';

import connectDatabase from 'middlewares/connectDatabase';
import Tag from 'entities/Tag';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

async function create(req: ApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  if (!name) return res.status(422).json({ message: 'Invalid name' });

  const tag = await req.db.findOne('Tag', { name });

  if (tag) return res.status(422).json({ message: 'Tag already exists' });

  const newTag = new Tag(name);
  await req.db.save(newTag);

  return res.status(200).json({ tag: newTag });
}

async function index(req: ApiRequest, res: NextApiResponse) {
  const tags = await req.db.find('Tag');

  res.status(200).json(tags);
}

async function handler(req: ApiRequest, res: NextApiResponse) {
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
