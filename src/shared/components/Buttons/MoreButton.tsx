import {FC} from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {Button, ButtonProps} from '@mui/material';

export const MoreButton: FC<ButtonProps> = props => {
  return (
    <Button
      variant="subtle"
      color="inherit"
      sx={{
        width: 50,
        height: 50,
        minWidth: 0,
        px: 1,
        py: 1,
        borderRadius: '15px',
      }}
      {...props}
    >
      <MoreHorizOutlinedIcon />
    </Button>
  );
};
