import React from 'react';

import { Container, Header, Title, DateTime, Content } from './styles';

interface PostProps {
  title: string;
  content: string;
  isFavorited: boolean;
  updatedAt: string;
}

export default function Post({ title, updatedAt, content }: PostProps): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <DateTime>{updatedAt}</DateTime>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
