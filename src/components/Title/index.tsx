import { memo, ReactNode } from 'react';

import { StyledTitle } from './styles';

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}

export default memo(Title);
