import React from 'react';
import { Formik, Form } from 'formik';

import { Button, FormikField } from 'components/Form';
import PageTitle from 'components/PageTitle';

import { Content } from './styles';

export default function NewPost() {
  const initialValues = {
    title: '',
    content: '',
  };

  function handleSubmit(values) {
    console.log('handleSubmit', { values });
  }

  return (
    <Content>
      <PageTitle>New post</PageTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FormikField name="title" placeholder="Title" />
          <FormikField name="content" placeholder="Content" />
          <Button color="green" title="Add new post" type="submit">
            Add new post
          </Button>
        </Form>
      </Formik>
    </Content>
  );
}
