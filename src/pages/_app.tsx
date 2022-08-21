/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';

import Alert from '@components/Alert';
import Provider from '@context/Provider';

import type { AppProps } from 'next/app';

import '@styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Coffee Stores, Coffee Shops, Coffee,coffee shop, coffee store"
        />
        <meta name="author" content="TAKANOME DEV" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider>
        <Alert />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
