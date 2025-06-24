import {FC, PropsWithChildren} from 'react';
import {Alert, Box} from '@mui/material';

interface Props {
  isPending: boolean;
  error: Error | null;
}

export const BaseComponentLayout: FC<PropsWithChildren<Props>> = ({
  isPending,
  error,
  children,
}) => {
  return (
    <>
      {isPending && (
        <Box display="flex" justifyContent="center" p={2}>
          Загрузка...
        </Box>
      )}

      {error && (
        <Alert severity="error" color="error">
          {error.message}
        </Alert>
      )}

      {!isPending && !error && children}
    </>
  );
};
