import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity({ name: 'tags' })
export default class Tag {
  constructor(name: string) {
    this.name = name;
  }

  @ObjectIdColumn()
  _id: ObjectID;

  @Column('text', { unique: true })
  name: string;
}
