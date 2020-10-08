import { NextApiRequest, NextApiResponse } from 'next';
import { EntityManager } from 'typeorm';
import { ObjectId } from 'mongodb';
import * as yup from 'yup';

import connectDatabase from 'pages/api/_middlewares/connectDatabase';
import Tag from 'entities/Tag';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
  query: {
    _id: string;
  };
  tag: Tag;
}

async function validateDestroy(req: ApiRequest, res: NextApiResponse) {
  const { _id } = req.query;
  const tag: Tag = await req.db.findOne('Tag', _id);

  if (!tag) {
    res.status(404).json({ message: 'Tag not found' });
  }

  req.tag = tag;
}

async function validateUpdate(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({ name: yup.string().min(3).required() });
  const { name } = req.body;

  // validate body
  try {
    schema.validateSync({ name }, { abortEarly: false });
  } catch (error) {
    const message = 'Validation error';
    const errors = error.inner.map((e: yup.ValidationError) => ({
      [e.path]: e.message,
    }));

    res.status(422).json({ message, errors });
  }

  // check tag exists
  const { _id } = req.query;
  const tag: Tag = await req.db.findOne('Tag', _id);

  if (!tag) {
    res.status(404).json({ message: 'Tag not found' });
  }

  // check there are tags same name
  const [, tagsSameNameLength] = await req.db.findAndCount('Tag', {
    where: {
      _id: { $not: { $eq: new ObjectId(_id) } },
      name,
    },
  });

  if (tagsSameNameLength) {
    res.status(422).json({ message: 'Already exist tag same name' });
  }

  req.tag = tag;
}

async function destroy(req: ApiRequest, res: NextApiResponse) {
  const { tag } = req;

  await req.db.delete('Tag', tag);

  res.status(204).json([]);
}

async function update(req: ApiRequest, res: NextApiResponse) {
  const { tag } = req;
  const { _id } = req.query;
  const { name } = req.body;

  await req.db.update('Tag', tag, { name });

  res.status(200).json({ tag: { _id, name } });
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
