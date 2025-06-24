import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

import {ErrorNotImplemented} from '@shared/types';
import imageSrc from './cat.jpg';

interface Props {
  error?: ErrorNotImplemented;
}

export const NotImplemented: FC<Props> = ({error}) => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
      <img
        src={imageSrc}
        width={280}
        height={'100%'}
        style={{borderRadius: '50%'}}
        alt="Логотип Ленты"
      />

      <Typography variant="h1" mt={3}>
        Пока не реализовано
      </Typography>

      <Typography variant="b1regular" mt={1} mb={3}>
        {error?.message || 'Надеемся, скоро будет реализовано!'}
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          navigate(-1);
        }}
      >
        Вернуться назад
      </Button>
    </Box>
  );
};
