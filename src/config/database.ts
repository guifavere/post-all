import { ConnectionOptions } from 'typeorm';

import Post from 'entities/Post';
import Tag from 'entities/Tag';

const isTestEnvironment = process.env.NODE_ENV === 'test';

const testEnvironmentMongoUrl = process.env.MONGO_URL;

const database = process.env.DB_NAME;
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const devOrProdEnvironmentMongoUrl = `mongodb://${host}:${port}/${database}`;

const url = isTestEnvironment
  ? testEnvironmentMongoUrl
  : devOrProdEnvironmentMongoUrl;

export default <ConnectionOptions>{
  name: 'default',
  type: 'mongodb',
  url,
  useUnifiedTopology: true,
  entities: [Post, Tag],
};
