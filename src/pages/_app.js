// i18n
import '../locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
// next
import Head from 'next/head';
// utils
import { Provider } from 'react-redux';
import { store, persistor } from 'src/app/store'
import { PersistGate } from 'redux-persist/integration/react';
import AblyProvider from 'src/store/context/AblyProvider';
import createEmotionCache from '../utils/createEmotionCache';
// theme
import ThemeProvider from '../theme';
// locales
import ThemeLocalization from '../locales';
// components
import ProgressBar from '../components/progress-bar';
import SnackbarProvider from '../components/snackbar';
import { MotionLazyContainer } from '../components/animate';
import { ThemeSettings, SettingsProvider } from '../components/settings';
// Check our docs
// https://docs.minimals.cc/authentication/js-version

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};
export default function MyApp(props) {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;


  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SettingsProvider>
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <ThemeLocalization>
                    <SnackbarProvider>
                      <ProgressBar />
                      <AblyProvider>
                      {getLayout(<Component {...pageProps} />)}
                      </AblyProvider>
                    </SnackbarProvider>
                  </ThemeLocalization>
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </SettingsProvider>
          </PersistGate>
      </Provider>
    </CacheProvider>
  );
}
