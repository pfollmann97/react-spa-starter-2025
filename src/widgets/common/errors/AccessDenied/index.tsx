import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

import Icon from '../SomethingWentWrong/picture.svg?react';

export const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
      <Icon width={280} height={'100%'} />

      <Typography variant="h1" mt={3}>
        У вас нет доступа к запрашиваемой странице
      </Typography>

      <Typography variant="b1regular" mt={1} mb={3}>
        Чтобы получить доступ, обратитесь к своему руководству
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
