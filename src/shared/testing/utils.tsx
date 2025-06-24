import {FC, PropsWithChildren, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {render, RenderOptions} from '@testing-library/react';

import {queryClient} from '../setup';

const AllTheProviders: FC<PropsWithChildren> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH}>
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
