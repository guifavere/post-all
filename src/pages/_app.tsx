import React from 'react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import BottomNavigation from 'components/BottomNavigation';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

function fetcher(url: string) {
  return axios(url)
    .then(
      response =>
        new Promise(resolve => setTimeout(() => resolve(response.data), 1000)),
    )
    .catch(
      error =>
        new Promise((resolve, reject) =>
          setTimeout(() => reject(error.response), 1000),
        ),
    );
}

export default function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <BottomNavigation />
        <GlobalStyle />
      </SWRConfig>
    </ThemeProvider>
  );
}
