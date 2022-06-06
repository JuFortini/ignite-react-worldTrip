import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { ColorModeButtonProvider } from '../contexts/ColorModeButtonContext';
import { makeServer } from '../services/mirage';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === "development") {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeButtonProvider>
        <Component {...pageProps} />
      </ColorModeButtonProvider>
    </ChakraProvider>
  );
}

export default MyApp
