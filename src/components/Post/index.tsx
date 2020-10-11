import React, { memo } from 'react';

import FavoritedButton from 'components/FavoritedButton';

import { Container, Header, Title, DateTime, Content, Footer } from './styles';

interface PostProps {
  _id: number;
  title: string;
  content: string;
  isFavorited: boolean;
  updatedAt: string;
}

function Post({
  _id,
  title,
  content,
  isFavorited,
  updatedAt,
}: PostProps): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <DateTime>{updatedAt}</DateTime>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <Footer>
        <FavoritedButton isFavorited={isFavorited} postId={_id} />
      </Footer>
    </Container>
  );
}

export default memo(Post);
