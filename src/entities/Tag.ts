import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity({ name: 'tags' })
export default class Tag {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column('text', { unique: true })
  name: string;
}
