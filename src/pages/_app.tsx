import React from 'react';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, ToastOptions } from 'react-toastify';

import BottomNavigation from 'components/BottomNavigation';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import 'react-toastify/dist/ReactToastify.css';

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

const toastConfig: ToastOptions = {
  autoClose: 5000,
  closeOnClick: true,
  draggable: true,
  hideProgressBar: false,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  position: 'bottom-right',
  rtl: false,
};

export default function ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <BottomNavigation />
        <ToastContainer {...toastConfig} />
        <GlobalStyle />
      </SWRConfig>
    </ThemeProvider>
  );
}
