import React from 'react';
import { Formik, Form } from 'formik';

import BackLink from 'components/BackLink';
import { Button, FormikField } from 'components/Form';
import Title from 'components/Title';

import { Content } from './styles';

export default function NewPost() {
  const initialValues = {
    title: '',
    content: '',
  }

  function handleSubmit(values) {
    console.log('handleSubmit', { values });
  }

  return (
    <Content>
      <BackLink />
      <Title>New post</Title>
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
  )
}
