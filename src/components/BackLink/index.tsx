import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';

import { Button } from './styles';

function BackLink() {
  const { back: handleBackPage } = useRouter();

  return (
    <Button onClick={handleBackPage}>
      <FiChevronLeft />
      <p>Back</p>
    </Button>
  );
}

export default memo(BackLink);
