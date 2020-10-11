import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';
import * as yup from 'yup';

import connectDatabase from 'pages/api/_middlewares/connectDatabase';
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

function validateList(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({
    limit: yup.number().min(1).max(100),
    page: yup.number(),
    filterTitle: yup.string(),
  });

  const {
    limit = '10',
    page = '1',
    'filter[title]': filterTitle = '',
  } = req.query;

  // validate params
  try {
    schema.validateSync({ limit, page, filterTitle }, { abortEarly: false });
  } catch (error) {
    const message = 'Validation error';

    const errors = error.inner.map((e: yup.ValidationError) => ({
      [e.path]: e.message,
    }));

    res.status(422).json({ message, errors });
  }

  req.query = { limit, page, filterTitle };
}

async function create(req: ApiRequest, res: NextApiResponse) {
  const { title, content } = req.body;
  const post = new Post(title, content);

  await req.db.save(post);

  res.status(201).json({ post });
}

async function list(req: ApiRequest, res: NextApiResponse) {
  const limit = Number(req.query.limit);
  const page = (Number(req.query.page) - 1) * limit;

  const posts = await req.db.find('Post', {
    where: {
      title: { $regex: req.query.filterTitle },
    },
    skip: page,
    take: limit,
  });

  res.status(200).json(posts);
}

async function handler(req: ApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await validateList(req, res);
      await list(req, res);
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
