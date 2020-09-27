import { ConnectionOptions } from 'typeorm';

import Post from 'entities/Post';
import Tag from 'entities/Tag';

export default <ConnectionOptions>{
  name: 'default',
  type: 'mongodb',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 27017,
  database: process.env.DB_NAME,
  useUnifiedTopology: true,
  entities: [Post, Tag],
};
