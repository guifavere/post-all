import React from 'react';

import BackLink from 'components/BackLink';
import PageTitle from 'components/PageTitle';
import Post from 'components/Post';
import SearchForm from 'components/SearchForm';

import { Content } from './styles';

const somePost = {
  id: 1,
  title: 'Learning typescript',
  content: '<p><strong>Lorem ipsum lorem ipsum lorem ipsum</strong><br />Lorem ipsum lorem ipsum lorem ipsum</p>',
  isFavorited: true,
  updatedAt: '2000-12-03',
}

export default function Favorited() {
  return (
    <Content>
      <BackLink />
      <PageTitle>Favorited</PageTitle>
      <SearchForm />
      <Post {...somePost} />
    </Content>
  );
}
