import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Button } from './styles';

interface FavoritedButtonProps {
  isFavorited: boolean;
  postId: number;
}

export default function FavoritedButton({ isFavorited }: FavoritedButtonProps) {
  return (
    <Button isFavorited={isFavorited}>
      <FiHeart />
    </Button>
  )
};
