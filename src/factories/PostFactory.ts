import faker from 'faker';

import createConnection from 'database';
import Post from 'entities/Post';

interface Props {
  title?: string;
  content?: string;
}

export default class PostFactory {
  private static build(props: Props): Post {
    const defaultAttributes = {
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
    };

    const attributes = { ...defaultAttributes, ...props };

    const { title, content } = attributes;

    const post = new Post(title, content);

    return post;
  }

  public static async create(props: Props = {}): Promise<Post> {
    const client = await createConnection();

    const post = this.build(props);

    const savedPost = client.manager.save(post);

    return savedPost;
  }

  public static make(props: Props = {}): Post {
    return this.build(props);
  }
}
