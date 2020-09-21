import React from 'react';
import Link from 'next/link';
import { FiHeart, FiHome, FiPlus } from 'react-icons/fi';

import {
  Container,
  Links,
  FavoritedLink,
  HomeLink,
  NewPostLink,
} from './styles';

const BottomNavigation: React.FC = () => {
  return (
    <Container>
      <Links>
        <Link href="/favorited">
          <FavoritedLink>
            <FiHeart size={18} />
          </FavoritedLink>
        </Link>
        <Link href="/">
          <HomeLink>
            <FiHome size={18} />
          </HomeLink>
        </Link>
        <Link href="/posts/new">
          <NewPostLink>
            <FiPlus size={18} />
          </NewPostLink>
        </Link>
      </Links>
    </Container>
  );
};

export default BottomNavigation;
