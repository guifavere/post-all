import React from 'react';
import { Formik, Form, Field } from 'formik';

import BackLink from 'components/BackLink';
import { SuccessButton, FormikField } from 'components/Form';
import Title from 'components/Title';

import { Content } from './styles';

interface formValues {
  title: string;
  content: string;
}

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
          <SuccessButton title="Add new post" type="submit">
            Add new post
          </SuccessButton>
        </Form>
      </Formik>
    </Content>
  )
}
