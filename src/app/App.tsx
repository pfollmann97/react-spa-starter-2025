import {ErrorBoundary} from 'react-error-boundary';
import ModalContainer from 'react-modal-promise';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from '@features/auth';
import {ThemeProvider} from '@mui/material/styles';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import useMount from 'ahooks/es/useMount';
import {setDefaultOptions} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';
import {SnackbarProvider} from 'notistack';

import {isProduction} from '@shared/constants';
import {queryClient} from '@shared/setup';
import {SomethingWentWrong} from '@widgets/common';
import GlobalStyles from './GlobalStyles';

import './font.css';

import Routes from '@/app/Routes';
import theme from '@/theme';

// Set global locale for date-fns
setDefaultOptions({locale: ruLocale});

const vitePreloadErrorEvent = 'vite:preloadError';
const vitePreloadErrorHandler = () => {
  window.location.reload();
};

const App = () => {
  useMount(() => {
    if (isProduction) {
      console.log(`version: ${import.meta.env.VITE_APP_VERSION}`);

      window.addEventListener(vitePreloadErrorEvent, vitePreloadErrorHandler);

      return () => {
        window.removeEventListener(
          vitePreloadErrorEvent,
          vitePreloadErrorHandler,
        );
      };
    }

    return 0;
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH}>
          <GlobalStyles />
          <SnackbarProvider>
            <ErrorBoundary fallback={<SomethingWentWrong />}>
              <AuthProvider>
                <Routes />
                <ModalContainer />
              </AuthProvider>
            </ErrorBoundary>
          </SnackbarProvider>
        </BrowserRouter>

        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
