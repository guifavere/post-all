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

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fontFamilies.heading};
  font-size: ${props => props.theme.fontSizes.xg};
`;
