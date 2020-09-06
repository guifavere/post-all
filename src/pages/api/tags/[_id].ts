import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';
import { ObjectId } from 'mongodb';

import connectDatabase from 'middlewares/connectDatabase';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
  query: {
    _id: string;
  };
}

async function destroy(req: ApiRequest, res: NextApiResponse) {
  const { _id } = req.query;
  const tag = await req.db.findOne('Tag', _id);

  if (!tag) return res.status(404).json({ message: 'Tag not found' });

  await req.db.delete('Tag', tag);

  return res.status(204).json([]);
}

async function update(req: ApiRequest, res: NextApiResponse) {
  const { _id } = req.query;
  const { name } = req.body;

  if (!name) return res.status(422).json({ message: 'Invalid name' });

  const tag = await req.db.findOne('Tag', _id);

  if (!tag) return res.status(404).json({ message: 'Tag not found' });

  const [, tagsSameNameLength] = await req.db.findAndCount('Tag', {
    where: {
      _id: { $not: { $eq: new ObjectId(_id) } },
      name,
    },
  });

  if (tagsSameNameLength)
    return res.status(422).json({ message: 'Already exist tag same name' });

  await req.db.update('Tag', tag, { name });

  return res.status(200).json({ tag: { _id, name } });
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
