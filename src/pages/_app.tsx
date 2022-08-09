/* eslint-disable react/jsx-props-no-spreading */

import Alert from '@components/Alert';
import Provider from '@context/Provider';

import type { AppProps } from 'next/app';

import '@styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Alert />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
