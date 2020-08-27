import { createConnection, Connection } from 'typeorm';

import DbConfig from 'config/database';

export default (): Promise<Connection> => createConnection(DbConfig);
