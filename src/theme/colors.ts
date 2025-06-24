import {lighten} from '@mui/material/styles';

export const COLOR__BLACK = '#000';
export const COLOR__MAIN_BLACK = '#171717';
export const COLOR__GRAY = '#636170';
export const COLOR__WHITE = '#fff';
export const COLOR__LIGHT_GRAY = '#98979F';
export const COLOR__LINE = '#CBCDD8';

// Standard backgrounds
export const COLOR__BACK = '#EDEEF3';
export const COLOR__LIGHT_BACK = '#F6F6F6';
export const COLOR__OFF_WHITE = COLOR__WHITE;

// Main colors
export const COLOR__PRIMARY = '#1751D0';
export const COLOR__SECONDARY = '#FFC106';
export const COLOR__ERROR = '#E05225';
export const COLOR__WARNING = '#FF9900';
export const COLOR__INFO = '#3991E5'; // not used in Figma
export const COLOR__SUCCESS = '#00BE64';
export const COLOR__TEXT_PRIMARY = COLOR__MAIN_BLACK;
export const COLOR__TEXT_SECONDARY = COLOR__GRAY;
export const COLOR__TEXT_DISABLED = `${COLOR__MAIN_BLACK}8F`; // 56% opacity

export const COLOR__PRIMARY_LIGHT = '#E5F0FF';
export const COLOR__PRIMARY_DARK = '#0C296A';
export const COLOR__SECONDARY_LIGHT = '#FFFAEC';
export const COLOR__SECONDARY_DARK = '#6E5404';
export const COLOR__ERROR_LIGHT = '#FDEBED';
export const COLOR__ERROR_DARK = '#401125';
export const COLOR__SUCCESS_LIGHT = '#E4F6DF';
export const COLOR__SUCCESS_DARK = '#401125';
export const COLOR__WARNING_LIGHT = '#FAEED8';
export const COLOR__WARNING_DARK = '#4D3B1A';

export const COLOR__ORIOL = lighten(COLOR__LIGHT_BACK, 0.5);
