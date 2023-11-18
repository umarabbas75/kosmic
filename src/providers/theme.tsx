'use client';

import theme from '@/muiTheme';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import * as React from 'react';

export default function Theme({
  children,
}: any) {

  return <ThemeProvider theme={theme}>
      <CssBaseline />
    {children}</ThemeProvider>;
}
