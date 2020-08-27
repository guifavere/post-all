import { ConnectionOptions } from 'typeorm';

export default <ConnectionOptions>{
  type: 'mongodb',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 27017,
  name: process.env.DB_NAME,
  useUnifiedTopology: true,
};
