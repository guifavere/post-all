import { memo, ReactNode } from 'react';

import { StyledTitle } from './styles';

interface PageTitleProps {
  children: ReactNode;
}

function PageTitle({ children }: PageTitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}

export default memo(PageTitle);
