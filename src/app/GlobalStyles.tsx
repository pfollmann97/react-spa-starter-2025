import MuiGlobalStyles from '@mui/material/GlobalStyles';

import {fontFamilyString} from '@/theme/typography';

const fontFamily = fontFamilyString;

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          height: '100%',
          width: '100%',
          fontFamily,
        },
        body: {
          height: '100%',
          width: '100%',
        },
        '#app': {
          height: '100%',
          width: '100%',
        },
        button: {
          fontFamily,
        },
      }}
    />
  );
};

export default GlobalStyles;
