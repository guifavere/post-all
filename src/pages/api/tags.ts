import { NextApiResponse, NextApiRequest } from 'next';

import connectDatabase from 'middlewares/connectDatabase';
import Tag from 'entities/Tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;
  const tag = new Tag(name);

  await req.db.save(tag);

  res.status(200).json([]);
}

export default connectDatabase(handler);
