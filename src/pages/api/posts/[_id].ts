import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';
import { ObjectId } from 'mongodb';
import * as yup from 'yup';

import connectDatabase from 'pages/_middlewares/connectDatabase';
import Post from 'entities/Post';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
  query: {
    _id: string;
  };
  post: Post;
}

async function validateDestroy(req: ApiRequest, res: NextApiResponse) {
  const { _id } = req.query;
  const post: Post = await req.db.findOne('Post', _id);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  }

  req.post = post;
}

async function validateUpdate(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({
    title: yup.string().min(3),
    content: yup.string().min(3),
  });

  const { title, content } = req.body;

  // validate body
  if (!req.body) {
    res.status(422).json({ message: 'Invalid body content' });
  }

  try {
    schema.validateSync({ title, content }, { abortEarly: false });
  } catch (error) {
    const message = 'Validation error';
    const errors = error.inner.map((e: yup.ValidationError) => ({
      [e.path]: e.message,
    }));

    res.status(422).json({ message, errors });
  }

  // check post exists
  const { _id } = req.query;
  const post: Post = await req.db.findOne('Post', _id);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  }

  // check there are posts same title
  const [, postsSameTitleLength] = await req.db.findAndCount('Post', {
    where: {
      _id: { $not: { $eq: new ObjectId(_id) } },
      title,
    },
  });

  if (postsSameTitleLength) {
    res.status(422).json({ message: 'Already exist post same title' });
  }

  req.post = post;
}

async function destroy(req: ApiRequest, res: NextApiResponse) {
  const { post } = req;

  await req.db.delete('Post', post);

  res.status(204).json([]);
}

async function update(req: ApiRequest, res: NextApiResponse) {
  const { post } = req;
  const { title, content } = req.body;

  const payload = Object.entries({ title, content }).reduce(
    (values, [key, value]) => (value ? { ...values, [key]: value } : values),
    {},
  );

  await req.db.update('Post', post, payload);

  const updatedPost = { ...post, ...payload };

  res.status(200).json({ post: updatedPost });
}

async function handler(req: ApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      await validateDestroy(req, res);
      await destroy(req, res);
      break;
    case 'PUT':
      await validateUpdate(req, res);
      await update(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
