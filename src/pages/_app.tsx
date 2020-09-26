import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import BottomNavigation from 'components/BottomNavigation';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <BottomNavigation />
      <GlobalStyle />
    </ThemeProvider>
  );
}
