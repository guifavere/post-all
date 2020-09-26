import styled from 'styled-components';

export const Content = styled.main`
  padding: 20px;

  > button {
    margin-top: 30px;
  }

  > h1 {
    margin: 50px 0;
  }

  form {

    > input {
      margin-bottom: 20px;
    }

    > input,
    > button {
      width: 100%;
    }
  }
`;
