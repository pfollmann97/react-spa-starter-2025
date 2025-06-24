import * as React from 'react';
import {Box, Typography} from '@mui/material';

import {
  COLOR__BACK,
  COLOR__LIGHT_GRAY,
  COLOR__SUCCESS,
  COLOR__SUCCESS_LIGHT,
  COLOR__TEXT_PRIMARY,
  COLOR__WHITE,
} from '@/theme/colors';

interface Props {
  stepNumber: number;
  isActive: boolean;
  isCompleted: boolean;
}

const stepIconSize = 34;

export const Step = ({isActive, isCompleted, stepNumber}: Props) => {
  const bgColor = isActive || isCompleted ? COLOR__WHITE : COLOR__BACK;

  let color = COLOR__LIGHT_GRAY;
  if (isActive) {
    color = COLOR__TEXT_PRIMARY;
  } else if (isCompleted) {
    color = COLOR__SUCCESS;
  }

  let borderColor = 'transparent';
  if (isActive) {
    borderColor = '#FFB900';
  } else if (isCompleted) {
    borderColor = COLOR__SUCCESS_LIGHT;
  }

  return (
    <Box
      width={stepIconSize}
      height={stepIconSize}
      borderRadius="50%"
      bgcolor={bgColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={`1px solid ${borderColor}`}
    >
      <Typography variant="b2medium" sx={{color}}>
        {stepNumber}
      </Typography>
    </Box>
  );
};
