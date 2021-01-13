import faker from 'faker';

import createDBConnection from 'database';
import Post from 'entities/Post';

interface PostProps {
  title: string;
  content: string;
}

type PartialPostProps = { [P in keyof PostProps]?: PostProps[P] };

export default class PostFactory {
  private post: Post;

  private constructor(partialProps: PartialPostProps) {
    this.post = this.build(partialProps);
  }

  private getDefaultProps(): PostProps {
    return {
      title: faker.lorem.sentence(),
      content: faker.lorem.sentences(),
    };
  }

  private build(partialPostProps: PartialPostProps): Post {
    const defaultProps = this.getDefaultProps();
    const props = { ...defaultProps, ...partialPostProps };

    const { title, content } = props;

    return new Post(title, content);
  }

  public static async create(
    partialPostProps: PartialPostProps = {},
  ): Promise<Post> {
    const dbClient = await createDBConnection();

    const postFactory = new PostFactory(partialPostProps);

    return dbClient.manager.save(postFactory.post);
  }

  public static make(partialProps: PartialPostProps = {}): Post {
    return new PostFactory(partialProps).post;
  }
}
