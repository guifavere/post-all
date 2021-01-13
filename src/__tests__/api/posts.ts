import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, MockRequest, MockResponse } from 'node-mocks-http';

import createDBConnection from 'database';
import Post from 'entities/Post';
import PostFactory from 'factories/PostFactory';
import posts from '../../pages/api/posts';

interface ErrorResponse {
  message: string;
  errors: {
    title?: string;
    content?: string;
  };
}

interface CreatedPostResponse {
  post: Post;
}

interface MockHttp {
  req: MockRequest<NextApiRequest>;
  res: MockResponse<NextApiResponse>;
}

describe('Create new post', () => {
  test('title is required', async () => {
    const { title, content } = PostFactory.make({ title: null });
    const bodyRequest = { title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('title');
  });

  test('title characters must be greater than 2', async () => {
    const { title, content } = PostFactory.make({ title: 'ti' });
    const bodyRequest = { title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('title');
  });

  test('title must be unique', async () => {
    const postA = await PostFactory.create();

    const { content } = PostFactory.make();
    const bodyRequest = { title: postA.title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: ErrorResponse = res._getData();

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('title');
  });

  test('content is required', async () => {
    const { title, content } = PostFactory.make({ content: null });
    const bodyRequest = { title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('content');
  });

  test('content characters must be greater than 2', async () => {
    const { title, content } = PostFactory.make({ content: 'co' });
    const bodyRequest = { title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: ErrorResponse = JSON.parse(res._getData());

    expect(res.statusCode).toBe(422);
    expect(jsonResponse.errors).toHaveProperty('content');
  });

  test('can create new post', async () => {
    const { title, content } = PostFactory.make();
    const bodyRequest = { title, content };

    const { req, res }: MockHttp = createMocks({
      method: 'POST',
      body: bodyRequest,
    });

    await posts(req, res);

    const jsonResponse: CreatedPostResponse = res._getData();

    const dbClient = await createDBConnection();
    const createdPost = dbClient.manager.findOne('Post', {
      _id: jsonResponse.post._id,
    });

    expect(res.statusCode).toBe(201);
    expect(jsonResponse.post).toBe(createdPost);
  });
});
