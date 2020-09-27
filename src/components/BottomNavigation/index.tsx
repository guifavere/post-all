import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHeart, FiHome, FiPlus } from 'react-icons/fi';

import {
  Container,
  Links,
  FavoritedLink,
  HomeLink,
  NewPostLink,
} from './styles';

export default function ButtonNavigation() {
  const { route } = useRouter();

  return (
    <Container>
      <Links>
        <Link href="/favorited">
          <FavoritedLink active={route === '/favorited'}>
            <FiHeart />
          </FavoritedLink>
        </Link>
        <Link href="/">
          <HomeLink active={route === '/'}>
            <FiHome />
          </HomeLink>
        </Link>
        <Link href="/posts/new">
          <NewPostLink active={route === '/posts/new'}>
            <FiPlus />
          </NewPostLink>
        </Link>
      </Links>
    </Container>
  );
};
