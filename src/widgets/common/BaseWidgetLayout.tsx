import {FC, PropsWithChildren} from 'react';
import {Box} from '@mui/material';

import {SomethingWentWrong} from './errors';

interface Props {
  isPending: boolean;
  error: Error | null;
}

export const BaseWidgetLayout: FC<PropsWithChildren<Props>> = ({
  isPending,
  error,
  children,
}) => {
  return (
    <>
      {isPending && (
        <Box mt={10} display="flex" justifyContent="center">
          Загрузка...
        </Box>
      )}

      {error && <SomethingWentWrong error={error} />}

      {!isPending && !error && children}
    </>
  );
};
