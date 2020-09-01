import { EntityManager } from 'typeorm';

declare module 'next' {
  export interface NextApiRequest {
    db: EntityManager;
  }
}
