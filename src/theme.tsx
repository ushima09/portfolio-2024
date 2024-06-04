'use client';

import { Comfortaa } from 'next/font/google';
import { Zen_Kaku_Gothic_New } from 'next/font/google';
import { createTheme } from '@mui/material';

const comfortaa = Comfortaa({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: ['300', '400', '500', '700', '900'],
  preload: false,
  display: 'swap',
});
const { pxToRem } = createTheme({}).typography;
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: pxToRem(16),
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontFamily: zenKakuGothicNew.style.fontFamily,
    fontSize: 16,
    h1: {
      fontSize: pxToRem(90),
      '@media (max-width:600px)': {
        fontSize: pxToRem(60),
      },
      fontFamily: comfortaa.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontSize: pxToRem(60),
      '@media (max-width:600px)': {
        fontSize: pxToRem(40),
      },
      fontWeight: 400,
    },
    h3: {
      fontSize: pxToRem(30),
      '@media (max-width:600px)': {
        fontSize: pxToRem(21),
      },
      fontWeight: 500,
    },
    h4: {
      fontSize: pxToRem(22),
      '@media (max-width:600px)': {
        fontSize: pxToRem(20),
      },
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: pxToRem(20),
      '@media (max-width:600px)': {
        fontSize: pxToRem(16),
      },
      fontWeight: 500,
    },
  },
});

export default theme;
