import {CSSProperties} from 'react';
import {TypographyOptions} from '@mui/material/styles/createTypography';

// Need to synchronize by hand with the storybook
export const fontFamilyString = `Futura PT Book, Futura PT, Roboto, sans-serif, Helvetica, Arial`;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1: CSSProperties;
    h2: CSSProperties;
    h3: CSSProperties;
    h3bold: CSSProperties;
    button: CSSProperties;
    b1regular: CSSProperties;
    b1medium: CSSProperties;
    b1semibold: CSSProperties;
    b2regular: CSSProperties;
    b2medium: CSSProperties;
    b2semibold: CSSProperties;
    b3regular: CSSProperties;
    b3medium: CSSProperties;
    b3semibold: CSSProperties;
    bigBalance: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: CSSProperties;
    h2?: CSSProperties;
    h3?: CSSProperties;
    h3bold?: CSSProperties;
    button?: CSSProperties;
    b1regular?: CSSProperties;
    b1medium?: CSSProperties;
    b1semibold?: CSSProperties;
    b2regular?: CSSProperties;
    b2medium?: CSSProperties;
    b2semibold?: CSSProperties;
    b3regular?: CSSProperties;
    b3medium?: CSSProperties;
    b3semibold?: CSSProperties;
    bigBalance?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ///////////////////////////////////////////////
    // disable most of builtin variants
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
    // disable most of builtin variants
    ///////////////////////////////////////////////

    //=============================================
    // Variants from Figma
    h1: true;
    h2: true;
    h3: true;
    h3bold: true;
    button: true;
    b1regular: true;
    b1medium: true;
    b1semibold: true;
    b2regular: true;
    b2medium: true;
    b2semibold: true;
    b3regular: true;
    b3medium: true;
    b3semibold: true;
    bigBalance: true;
    // Variants from Figma
    //=============================================
  }
}

export const typographyOptions: TypographyOptions = {
  fontFamily: fontFamilyString,
  ///////////////////////////////////////////////
  // disable most of builtin variants
  h4: undefined,
  h5: undefined,
  h6: undefined,
  body1: undefined,
  body2: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  caption: undefined,
  overline: undefined,
  // disable most of builtin variants
  ///////////////////////////////////////////////

  //=============================================
  // Variants from Figma
  h1: {
    fontSize: 32,
    fontWeight: 500,
    lineHeight: '41px',
  },
  h2: {
    fontSize: 22,
    fontWeight: 500,
    lineHeight: '28px',
  },
  h3: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: '26px',
  },
  h3bold: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '26px',
  },
  button: {
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '23px',
  },
  b1regular: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: '23px',
  },
  b1medium: {
    fontSize: 18,
    fontWeight: 450,
    lineHeight: '23px',
  },
  b1semibold: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '23px',
  },
  b2regular: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '21px',
  },
  b2medium: {
    fontSize: 16,
    fontWeight: 450,
    lineHeight: '21px',
  },
  b2semibold: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '21px',
  },
  b3regular: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '18px',
  },
  b3medium: {
    fontSize: 14,
    fontWeight: 450,
    lineHeight: '18px',
  },
  b3semibold: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '18px',
  },
  // Variants from Figma
  //=============================================
};

export default typographyOptions;
