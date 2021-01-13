import React, { useRef, ReactElement, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Input, Button } from 'components/Form';

import { Form } from './styles';

interface SearchFormProps {
  onSubmit({ title }): void;
}

export default function SearchForm({
  onSubmit,
}: SearchFormProps): ReactElement {
  const titleRef = useRef<HTMLInputElement>();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const title = titleRef.current.value;

    onSubmit({ title });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search" ref={titleRef} type="text" />
      <Button color="green" type="submit">
        <FiSearch />
      </Button>
    </Form>
  );
}
