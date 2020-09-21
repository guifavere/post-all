import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import BottomNavigation from 'components/BottomNavigation';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <BottomNavigation />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
