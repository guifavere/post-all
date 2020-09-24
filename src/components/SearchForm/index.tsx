import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input, SuccessButton } from 'components/Form';

import { Form } from './styles';

export default function SearchForm(): JSX.Element {
  return (
    <Form>
      <Input placeholder="Search" type="text" />
      <SuccessButton type="button">
        <FiSearch />
      </SuccessButton>
    </Form>
  );
}
