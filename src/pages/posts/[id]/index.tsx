import React from 'react';

import BackLink from 'components/BackLink';
import FavoritedButton from 'components/FavoritedButton';
import PageTitle from 'components/PageTitle';

import {
  Content,
  Post,
  PostHeader,
  PostTitle,
  PostContent,
  PostFooter,
  PostDateTime,
} from '../../../styles/pages/editPost';

const somePost = {
  id: 1,
  title: 'Learning typescript',
  content:
    '<p><strong>Lorem ipsum lorem ipsum lorem ipsum</strong><br />Lorem ipsum lorem ipsum lorem ipsum</p>',
  isFavorited: true,
  updatedAt: '2000-12-03',
};

export default function PostView() {
  return (
    <Content>
      <BackLink />
      <PageTitle>Post</PageTitle>
      <Post>
        <PostHeader>
          <PostTitle>{somePost.title}</PostTitle>
        </PostHeader>
        <PostContent dangerouslySetInnerHTML={{ __html: somePost.content }} />
        <PostFooter>
          <FavoritedButton
            isFavorited={somePost.isFavorited}
            postId={somePost.id}
          />
          <PostDateTime>{somePost.updatedAt}</PostDateTime>
        </PostFooter>
      </Post>
    </Content>
  );
}
