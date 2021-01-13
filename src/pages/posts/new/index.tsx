import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers, FormikValues } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { Button, FieldGroup, FormikField } from 'components/Form';
import PageTitle from 'components/PageTitle';

import Post from 'entities/Post';
import api from 'services/api';

import { Content } from '../../../styles/pages/newPost';

interface FormValues {
  title: string;
  content: string;
}

interface PostResponse {
  post: Post;
}

interface PostError {
  response: {
    status: number;
    data: {
      message: string;
      errors?: { Column: string }[];
    };
  };
}

export default function NewPost(): JSX.Element {
  const router = useRouter();

  const initialValues = useMemo(() => ({ title: '', content: '' }), []);

  const schema = useMemo(
    () =>
      yup.object().shape({
        title: yup
          .string()
          .min(3, 'must be greater than 2')
          .required('required'),
        content: yup
          .string()
          .min(3, 'must be greater than 2')
          .required('required'),
      }),
    [],
  );

  async function handleSubmit(
    { title, content }: FormValues,
    { setErrors }: FormikHelpers<FormikValues>,
  ) {
    const payload = { title, content };

    try {
      const response = await api.post<PostResponse>('posts', payload);
      const { _id } = response.data.post;

      router.push(`/posts/${_id}`);
    } catch (error: PostError) {
      console.log('CATCH', error, error.response);

      // const { errors, message } = error.response.data;

      // toast.error(message);

      // if (errors) {
      //   setErrors(errors);
      // }
    }
  }

  return (
    <Content>
      <PageTitle>New post</PageTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <FieldGroup>
            <FormikField name="title" placeholder="Title" />
          </FieldGroup>
          <FieldGroup>
            <FormikField name="content" placeholder="Content" />
          </FieldGroup>
          <Button color="green" title="Add new post" type="submit">
            Add new post
          </Button>
        </Form>
      </Formik>
    </Content>
  );
}
