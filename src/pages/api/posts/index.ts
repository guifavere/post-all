import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';
import * as yup from 'yup';

import connectDatabase from 'pages/_middlewares/connectDatabase';
import Post from 'entities/Post';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

async function validateCreate(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({
    title: yup.string().min(3).required(),
    content: yup.string().min(3).required(),
  });

  const { title, content } = req.body;

  // validate body
  try {
    schema.validateSync({ title, content }, { abortEarly: false });
  } catch (error) {
    const message = 'Validation error';

    const errors = error.inner.map((e: yup.ValidationError) => ({
      [e.path]: e.message,
    }));

    res.status(422).json({ message, errors });
  }

  // check there is already post same title
  const post = await req.db.findOne('Post', { title });

  if (post) {
    const message = 'Post already exists';

    res.status(422).json({ message });
  }
}

async function create(req: ApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;

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
      await validateCreate(req, res);
      await create(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
