import {menuClasses} from '@mui/material';
import {Components} from '@mui/material/styles';

import {
  COLOR__LIGHT_GRAY,
  COLOR__LINE,
  COLOR__PRIMARY,
  COLOR__WHITE,
} from '../colors';
import ExpandIcon from '../expand.svg?react';

export const selectSettings: Components['MuiSelect'] = {
  defaultProps: {
    IconComponent: ExpandIcon,
    MenuProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
      sx: {
        marginBlock: 0.5,
        [`& .${menuClasses.paper}`]: {
          borderRadius: '10px',
        },
      },
    },
  },
  styleOverrides: {
    root: {
      minWidth: 120,
      backgroundColor: COLOR__WHITE,
      borderRadius: '10px',
      border: 'none',
      '& fieldset': {
        border: `1px solid ${COLOR__LINE}`,
      },
      '&:not(.Mui-disabled):hover fieldset': {
        border: `1px solid ${COLOR__LIGHT_GRAY} !important`,
      },
      '&:focus-within fieldset, &:focus-visible fieldset': {
        border: `1px solid ${COLOR__PRIMARY} !important`,
      },
      '&.Mui-focused fieldset': {
        border: `1px solid ${COLOR__PRIMARY} !important`,
      },
    },
    select: {
      padding: '11px 12px',
    },
  },
};
