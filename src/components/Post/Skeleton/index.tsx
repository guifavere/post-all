import React, { memo } from 'react';
import ContentLoader from 'react-content-loader';

import { Container } from './styles';

function Skeleton(): JSX.Element {
  return (
    <Container>
      <ContentLoader
        backgroundColor="#f3f3f3"
        foregroundColor="#d6d6d6"
        height={204}
        speed={2}
        uniqueKey="home__post-skeleton"
        width="100%"
      >
        <rect x="0" y="0" rx="3" ry="3" width="200" height="19" />
        <rect x="0" y="25" rx="3" ry="3" width="119" height="16" />
        <rect x="0" y="61" rx="3" ry="3" width="100%" height="16" />
        <rect x="0" y="82" rx="3" ry="3" width="80%" height="16" />
        <rect x="0" y="103" rx="3" ry="3" width="90%" height="16" />
        <circle cx="20" cy="184" r="20" />
      </ContentLoader>
    </Container>
  );
}

export default memo(Skeleton);
