import { MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface FavoritedButtonProps {
  isFavorited: boolean;
  postId: number;
}

export const Button = styled.button<FavoritedButtonProps>`
  background: transparent;
  border: 1px solid ${props => props.theme.colors.gray[100]};
  border-radius: 50%;
  height: 36px;
  width: 36px;

  ${props => props.isFavorited && 'background: #fff;'}

  svg {
    color: ${props => props.theme.colors.red[400]};
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;
