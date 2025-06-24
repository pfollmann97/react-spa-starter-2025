import {FC} from 'react';
import {Box} from '@mui/material';

import {COLOR__BACK, COLOR__WHITE} from '@/theme/colors';

interface Props {
  isCompleted: boolean;
}

export const Connector: FC<Props> = ({isCompleted}) => {
  return (
    <Box
      height={4}
      borderRadius="2px"
      bgcolor={isCompleted ? COLOR__WHITE : COLOR__BACK}
      flex="1 1 0px"
    ></Box>
  );
};
