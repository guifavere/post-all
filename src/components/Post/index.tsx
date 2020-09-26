import React, { memo } from 'react';

import FavoritedButton from 'components/FavoritedButton';

import { Container, Header, Title, DateTime, Content, Footer } from './styles';

interface PostProps {
  id: number;
  title: string;
  content: string;
  isFavorited: boolean;
  updatedAt: string;
}

function Post({ id, title, updatedAt, content }: PostProps): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <DateTime>{updatedAt}</DateTime>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Footer>
        <FavoritedButton isFavorited={false} postId={id} />
      </Footer>
    </Container>
  );
}

export default memo(Post);
