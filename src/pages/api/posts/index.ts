import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';

import connectDatabase from 'pages/_middlewares/connectDatabase';
import Post from 'entities/Post';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

async function create(req: ApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;

  if (!title) return res.status(422).json({ message: 'Invalid title' });

  if (!content) return res.status(422).json({ message: 'Invalid content' });

  const post = await req.db.findOne('Post', { title });

  if (post) return res.status(422).json({ message: 'Post already exists' });

  const newPost = new Post(title, content);

  await req.db.save(newPost);

  res.status(201).json({ post: newPost });
}

async function index(req: ApiRequest, res: NextApiResponse) {
  const tags = await req.db.find('Post');

  res.status(200).json(tags);
}

async function handler(req: ApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await index(req, res);
      break;
    case 'POST':
      await create(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
