import React from 'react';

import BackLink from 'components/BackLink';
import SearchForm from 'components/SearchForm';
import Post from 'components/Post';

import { Content, Title } from './styles';

const somePost = {
  title: 'Learning typescript',
  content: '<p><strong>Lorem ipsum lorem ipsum lorem ipsum</strong><br />Lorem ipsum lorem ipsum lorem ipsum</p>',
  isFavorited: true,
  updatedAt: '2000-12-03',
}

export default function Favorited() {
  return (
    <Content>
      <BackLink />
      <Title>Favorited</Title>
      <SearchForm />
      <Post {...somePost} />
    </Content>
  );
}
