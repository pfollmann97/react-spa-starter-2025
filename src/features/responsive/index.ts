import {Theme, useMediaQuery} from '@mui/material';

export const getMobileMediaQuery = (theme: Theme): string =>
  theme.breakpoints.down('tablet');
export const getTabletMediaQuery = (theme: Theme): string =>
  theme.breakpoints.between('tablet', 'desktop');
export const getDesktopMediaQuery = (theme: Theme): string =>
  theme.breakpoints.up('desktop');

export const useIsMobile = (): boolean => useMediaQuery(getMobileMediaQuery);

export const useIsTablet = (): boolean => useMediaQuery(getTabletMediaQuery);

export const useIsDesktop = (): boolean => useMediaQuery(getDesktopMediaQuery);
