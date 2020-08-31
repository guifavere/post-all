import { createConnection, getConnectionManager, Connection } from 'typeorm';

import DbConfig from 'config/database';

export default async (): Promise<Connection> => {
  const client = getConnectionManager();

  return client.has('default')
    ? client.get('default')
    : createConnection(DbConfig);
};
