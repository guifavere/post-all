import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity({ name: 'posts' })
export default class Post {
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  @ObjectIdColumn()
  _id: ObjectID;

  @Column('text', { unique: true })
  title: string;

  @Column('text')
  content: string;
}
