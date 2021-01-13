import faker from 'faker';

import createDBConnection from 'database';
import Tag from 'entities/Tag';

interface TagProps {
  name: string;
}

type PartialTagProps = { [P in keyof TagProps]?: TagProps[P] };

export default class TagFactory {
  private tag: Tag;

  private constructor(partialProps: PartialTagProps) {
    this.tag = this.build(partialProps);
  }

  private getDefaultProps(): TagProps {
    return {
      name: faker.lorem.sentence(),
    };
  }

  private build(partialTagProps: PartialTagProps): Tag {
    const defaultProps = this.getDefaultProps();
    const props = { ...defaultProps, ...partialTagProps };

    const { name } = props;

    return new Tag(name);
  }

  public static async create(
    partialTagProps: PartialTagProps = {},
  ): Promise<Tag> {
    const dbClient = await createDBConnection();

    const tagFactory = new TagFactory(partialTagProps);

    return dbClient.manager.save(tagFactory.tag);
  }

  public static make(partialProps: PartialTagProps = {}): Tag {
    return new TagFactory(partialProps).tag;
  }
}
