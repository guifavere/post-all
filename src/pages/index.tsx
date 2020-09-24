import React from 'react';

import SearchForm from 'components/SearchForm';
import Post from 'components/Post';

import { Content } from './styles';

const somePost = {
  title: 'Learning typescript',
  content: '<p><strong>Lorem ipsum lorem ipsum lorem ipsum</strong><br />Lorem ipsum lorem ipsum lorem ipsum</p>',
  isFavorited: true,
  updatedAt: '2000-12-03',
}

const Home: React.FC = () => (
  <>
    <SearchForm />
    <Content>
      {[1, 2, 3].map(index => <Post key={index} {...somePost} />)}
    </Content>
  </>
);

export default Home;
