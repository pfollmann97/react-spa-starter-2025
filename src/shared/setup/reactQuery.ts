import {QueryClient} from '@tanstack/react-query';

import {isProduction} from '../constants';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: isProduction,
    },
  },
});
