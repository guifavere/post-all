import { createConnection, getConnectionManager, Connection } from 'typeorm';

import dbConfig from 'config/database';

export default async (): Promise<Connection> => {
  const client = getConnectionManager();

  function getConnection(): Connection {
    return client.get('default');
  }

  function startNewConnection(): Promise<Connection> {
    return createConnection(dbConfig);
  }

  const dbAlreadyConnected = client.has('default');

  return dbAlreadyConnected ? getConnection() : startNewConnection();
};
