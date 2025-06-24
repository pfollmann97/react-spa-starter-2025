import {FC} from 'react';
import {Box, LinearProgress} from '@mui/material';

import {Color} from '@/shared/types';
import {COLOR__LIGHT_BACK} from '@/theme/colors';

interface Props {
  color: Color;
  value: number;
}

export const ProgressBar: FC<Props> = ({color, value}) => {
  return (
    <Box
      minHeight={23}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 6,
          borderRadius: '3px',
          backgroundColor: COLOR__LIGHT_BACK,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
          },
        }}
      />
    </Box>
  );
};
