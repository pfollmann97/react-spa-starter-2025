import {FC} from 'react';
import {Box, BoxProps} from '@mui/material';

import {COLOR__WHITE} from '@/theme/colors';

export const CardBox: FC<BoxProps> = ({children, ...restProps}) => {
  return (
    <Box p={3} bgcolor={COLOR__WHITE} borderRadius="15px" {...restProps}>
      {children}
    </Box>
  );
};
