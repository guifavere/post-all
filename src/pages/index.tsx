import React, { ReactElement, useCallback, useReducer } from 'react';
import useSWR from 'swr';

import SearchForm from 'components/SearchForm';
import Post from 'components/Post';

import { Content } from './styles';

interface IPost {
  _id: number;
  title: string;
  content: string;
}

interface HomeState {
  limit: number;
  page: number;
  filters: {
    title: string;
  };
}

type HomeAction =
  | { type: 'LOAD_MORE_POSTS' }
  | { type: 'UPDATE_FILTERS'; payload: { filters: { title: string } } };

const homeInitialState = {
  limit: 2,
  page: 1,
  filters: {
    title: '',
  },
};

function homeReducer(state: HomeState, action: HomeAction) {
  switch (action.type) {
    case 'LOAD_MORE_POSTS':
      return { ...state, page: state.page + 1 };
    case 'UPDATE_FILTERS':
      return { ...state, page: 1, ...action.payload };
    default:
      return state;
  }
}

export default function Home(): ReactElement {
  const [{ limit, page, filters }, dispatch] = useReducer(
    homeReducer,
    homeInitialState,
  );

  const handleUpdateFilters = useCallback(({ title }) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: { filters: { title } } });
  }, []);

  const handleNextPage = useCallback(() => {
    dispatch({ type: 'LOAD_MORE_POSTS' });
  }, []);

  const posts = [];

  for (let i = 1; i <= page; i++) {
    posts.push(
      <Posts key={i} limit={limit} page={i} filterTitle={filters.title} />,
    );
  }

  return (
    <Content>
      <SearchForm onSubmit={handleUpdateFilters} />
      {posts}
      <button onClick={handleNextPage} type="button">
        load more...
      </button>
    </Content>
  );
}

interface PostsProps {
  limit: number;
  page: number;
  filterTitle: string | null;
}

function Posts({ limit, page, filterTitle }: PostsProps): ReactElement {
  const { data: posts } = useSWR<IPost[]>(
    `/api/posts?limit=${limit}&page=${page}&filter[title]=${filterTitle}`,
  );

  console.log('POSTS', { posts, page });

  if (!posts) {
    return <p>loading...</p>;
  }

  return (
    <>
      {posts.map(post => (
        <Post
          key={post._id}
          _id={post._id}
          title={post.title}
          content={post.content}
          isFavorited={false}
          updatedAt="20 April at 4:20 PM"
        />
      ))}
    </>
  );
}
