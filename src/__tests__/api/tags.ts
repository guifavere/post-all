import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, MockRequest, MockResponse } from 'node-mocks-http';

import createDBConnection from 'database';
import Tag from 'entities/Tag';
import TagFactory from 'factories/TagFactory';
import tags from '../../pages/api/tags';

interface ErrorResponse {
  message: string;
  errors: {
    name?: string;
  };
}

interface CreatedTagResponse {
  tag: Tag;
}

interface MockHttp {
  req: MockRequest<NextApiRequest>;
  res: MockResponse<NextApiResponse>;
}

describe('Create new tag', () => {
  test('name is required', async () => {
    const bodyRequest = { name: null };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await tags(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('name');
  });

  test('name characters must be greater than 2', async () => {
    const bodyRequest = { name: 'ta' };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await tags(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('name');
  });

  test('name must be unique', async () => {
    const tagA = await TagFactory.create();

    const bodyRequest = { name: tagA.name };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await tags(req, res);

    const jsonResponse: ErrorResponse = res._getData();

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('name');
  });

  test('can create new tag', async () => {
    const { name } = TagFactory.make();
    const bodyRequest = { name };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await tags(req, res);

    const jsonResponse: CreatedTagResponse = res._getData();

    const dbClient = await createDBConnection();
    const createdTag = dbClient.manager.findOne('Tag', {
      _id: jsonResponse.tag._id,
    });

    expect(res.statusCode).toBe(201);
    expect(jsonResponse.tag).toBe(createdTag);
  });
});
