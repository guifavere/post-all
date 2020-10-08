import { NextApiResponse, NextApiRequest } from 'next';
import { EntityManager } from 'typeorm';
import * as yup from 'yup';

import connectDatabase from 'pages/api/_middlewares/connectDatabase';
import Tag from 'entities/Tag';

interface ApiRequest extends NextApiRequest {
  db: EntityManager;
}

async function validateCreate(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
  });

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

  // check there is already tag same name
  const tag = await req.db.findOne('Tag', { name });

  if (tag) {
    const message = 'Tag already exists';

    res.status(422).json({ message });
  }
}

function validateList(req: ApiRequest, res: NextApiResponse) {
  const schema = yup.object().shape({
    limit: yup.number().min(1).max(100),
    page: yup.number(),
    filterName: yup.string(),
  });

  const {
    limit = '10',
    page = '1',
    'filter[name]': filterName = '',
  } = req.query;

  // validate params
  try {
    schema.validateSync({ limit, page, filterName }, { abortEarly: false });
  } catch (error) {
    const message = 'Validation error';

    const errors = error.inner.map((e: yup.ValidationError) => ({
      [e.path]: e.message,
    }));

    res.status(422).json({ message, errors });
  }

  req.query = { limit, page, filterName };
}

async function create(req: ApiRequest, res: NextApiResponse) {
  const { name } = req.body;
  const newTag = new Tag(name);

  await req.db.save(newTag);

  return res.status(201).json({ tag: newTag });
}

async function list(req: ApiRequest, res: NextApiResponse) {
  const limit = Number(req.query.limit);
  const page = (Number(req.query.page) - 1) * limit;

  const tags = await req.db.find('Tag', {
    where: {
      name: { $regex: req.query.filterName },
    },
    skip: page,
    take: limit,
  });

  res.status(200).json(tags);
}

async function handler(req: ApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      await validateCreate(req, res);
      await create(req, res);
      break;
    case 'GET':
      validateList(req, res);
      await list(req, res);
      break;
    default:
      res.status(400).json({ message: 'Invalid method' });
  }
}

export default connectDatabase(handler);
