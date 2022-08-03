import type { AppProps } from 'next/app';

import Alert from '@components/Alert';
import Provider from '@context/Provider';

import '@styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Provider>
      <Alert />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
