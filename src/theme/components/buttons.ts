import {Components, darken} from '@mui/material/styles';

import {
  COLOR__ERROR,
  COLOR__ERROR_LIGHT,
  COLOR__LIGHT_BACK,
  COLOR__LINE,
  COLOR__MAIN_BLACK,
  COLOR__PRIMARY,
  COLOR__PRIMARY_DARK,
  COLOR__PRIMARY_LIGHT,
  COLOR__SECONDARY,
  COLOR__SECONDARY_LIGHT,
  COLOR__WARNING,
  COLOR__WHITE,
} from '../colors';

const boxShadowFocusVisible =
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)';
const boxShadowSubtleInheritHover = `0 0 8px 4px ${darken(COLOR__LIGHT_BACK, 0.05)}`;

const containedPrimaryHoverBg = COLOR__PRIMARY_DARK;
const outlinedPrimaryHoverBg = '#FFF3D0';
const subtleErrorHoverBg = '#fdccd7';
const borderTransparent = '1px solid transparent';
const borderOfLineColor = `1px solid ${COLOR__LINE}`;

export const buttonSettings: Components['MuiButton'] = {
  defaultProps: {
    variant: 'contained',
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ownerState}) => ({
      borderRadius: 17,
      ...(ownerState.variant === 'contained' && {
        border: borderTransparent,
        '& span.MuiCircularProgress-root': {
          color: COLOR__PRIMARY,
        },
        '&:hover': {
          backgroundColor: containedPrimaryHoverBg,
        },
        '&:focus-visible': {
          boxShadow: boxShadowFocusVisible,
        },
        '&:active': {
          backgroundColor: containedPrimaryHoverBg,
        },
        '&.Mui-disabled': {
          backgroundColor: '#F2F2F2',
          border: `1px solid ${COLOR__LINE}`,
        },
      }),
      ...(ownerState.variant === 'outlined' && {
        backgroundColor: COLOR__PRIMARY_LIGHT,
        color: containedPrimaryHoverBg,
        border: borderTransparent,
        '& span.MuiCircularProgress-root': {
          color: COLOR__PRIMARY,
        },
        '&:hover': {
          backgroundColor: outlinedPrimaryHoverBg,
          border: borderTransparent,
        },
        '&:focus-visible': {
          backgroundColor: outlinedPrimaryHoverBg,
        },
        '&:active': {
          backgroundColor: darken(outlinedPrimaryHoverBg, 0.05),
          border: borderTransparent,
        },
        '&.Mui-disabled': {
          backgroundColor: COLOR__PRIMARY_LIGHT,
          opacity: 0.7,
          border: borderTransparent,
        },
      }),
      ...(ownerState.variant === 'subtle' &&
        ownerState.color === 'primary' && {
          backgroundColor: COLOR__WHITE,
          color: COLOR__WARNING,
          border: borderOfLineColor,
          '& span.MuiCircularProgress-root': {
            color: COLOR__PRIMARY,
          },
          '&:hover': {
            backgroundColor: COLOR__WHITE,
            boxShadow: '0 0 8px 8px #FFFAEC',
          },
          '&:focus-visible': {
            boxShadow: '0 0 8px 8px #FFFAEC',
          },
          '&:active': {
            backgroundColor: COLOR__WHITE,
            boxShadow: boxShadowFocusVisible,
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        }),
      ...(ownerState.variant === 'subtle' &&
        ownerState.color === 'error' && {
          backgroundColor: COLOR__ERROR_LIGHT,
          color: COLOR__ERROR,
          border: borderOfLineColor,
          '& span.MuiCircularProgress-root': {
            color: COLOR__ERROR,
          },
          '&:hover': {
            backgroundColor: subtleErrorHoverBg,
          },
          '&:focus-visible': {
            backgroundColor: subtleErrorHoverBg,
          },
          '&:active': {
            backgroundColor: darken(COLOR__ERROR_LIGHT, 0.05),
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        }),
      ...(ownerState.variant === 'subtle' &&
        // here "inherit" means "black" variant, not actual inherit
        ownerState.color === 'inherit' && {
          backgroundColor: COLOR__WHITE,
          border: borderOfLineColor,
          '& span.MuiCircularProgress-root': {
            color: COLOR__MAIN_BLACK,
          },
          '&:hover': {
            backgroundColor: COLOR__WHITE,
            boxShadow: boxShadowSubtleInheritHover,
          },
          '&:focus-visible': {
            boxShadow: boxShadowSubtleInheritHover,
          },
          '&:active': {
            boxShadow: boxShadowFocusVisible,
            backgroundColor: COLOR__WHITE,
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        }),
      ...(ownerState.variant === 'text' &&
        ownerState.color === 'secondary' && {
          '& span.MuiCircularProgress-root': {
            color: COLOR__SECONDARY,
          },
          '&:hover': {
            backgroundColor: COLOR__SECONDARY_LIGHT,
          },
          '&:focus-visible': {
            backgroundColor: COLOR__SECONDARY_LIGHT,
          },
          '&:active': {
            backgroundColor: darken(COLOR__SECONDARY_LIGHT, 0.05),
          },
          '&.Mui-disabled': {
            opacity: 0.5,
          },
        }),
    }),
    sizeMedium: {
      padding: '14px 32px',
    },
  },
};
