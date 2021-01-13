import styled from 'styled-components';

export const Content = styled.main`
  padding: 20px;

  > button {
    margin-top: 30px;
  }

  > h1 {
    margin: 50px 0;
  }

  > form {
    margin-bottom: 20px;
  }

  > article + article {
    margin-top: 30px;
  }
`;
