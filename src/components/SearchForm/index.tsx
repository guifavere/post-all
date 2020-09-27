import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input, Button } from 'components/Form';

import { Form } from './styles';

export default function SearchForm() {
  return (
    <Form>
      <Input placeholder="Search" type="text" />
      <Button color="green" type="button">
        <FiSearch />
      </Button>
    </Form>
  );
}
