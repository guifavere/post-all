import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Button, FavoritedButtonProps } from './styles';

export default function FavoritedButton({ isFavorited }: FavoritedButtonProps): JSX.Element {
  return (
    <Button isFavorited={isFavorited}>
      <FiHeart />
    </Button>
  )
};
