import React from 'react';

import SearchForm from 'components/SearchForm';
import Post from 'components/Post';

import { Content } from './styles';

const somePost = {
  id: 1,
  title: 'Learning typescript',
  content: '<p><strong>Lorem ipsum lorem ipsum lorem ipsum</strong><br />Lorem ipsum lorem ipsum lorem ipsum</p>',
  isFavorited: true,
  updatedAt: '2000-12-03',
}

export default function Home() {
  return (
    <Content>
      <SearchForm />
      <Post {...somePost} />
    </Content>
  );
};
