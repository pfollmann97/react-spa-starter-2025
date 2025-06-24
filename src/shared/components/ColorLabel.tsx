import {Box, BoxProps} from '@mui/material';

export const ColorLabel = ({children, ...restProps}: BoxProps) => {
  return (
    <Box px={1} py={0.5} borderRadius="10px" {...restProps}>
      {children}
    </Box>
  );
};
