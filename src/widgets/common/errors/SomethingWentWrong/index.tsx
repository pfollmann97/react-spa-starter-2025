import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';
import {isAxiosError} from 'axios';

import {ErrorNotImplemented} from '@shared/types';
import {AccessDenied} from '../AccessDenied';
import {NotImplemented} from '../NotImplement';
import Icon from './picture.svg?react';

interface Props {
  error?: Error;
}

export const SomethingWentWrong: FC<Props> = ({error}) => {
  const navigate = useNavigate();

  if (error && error instanceof ErrorNotImplemented) {
    return <NotImplemented error={error} />;
  }

  if (error && isAxiosError(error) && error.status === 403) {
    return <AccessDenied />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
      <Icon width={280} height={'100%'} />

      <Typography variant="h1" mt={3}>
        Что-то пошло не так...
      </Typography>

      <Typography variant="b1regular" mt={1} mb={3}>
        Мы уже работаем над устранением неполадок
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          navigate('/');
          setTimeout(() => {
            window.location.reload();
          }, 0);
        }}
      >
        Вернуться на Главную
      </Button>
    </Box>
  );
};
