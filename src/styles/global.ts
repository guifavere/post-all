import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    font-size: 100%;
  }

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  &:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.colors.background};
    padding-bottom: 88px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
