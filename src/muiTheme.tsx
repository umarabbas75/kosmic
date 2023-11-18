'use client'
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradient: true;
    }
  }
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 745,
      md: 1440,
      lg: 1728,
      xl : 2200
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette:  {
    primary: {
      main: '#523FD7',
      mainGradient: "linear-gradient(to right, tomato, cyan)",
    } as {
        main: string;
        mainGradient?: string;
    },
    secondary: {
      main: '#FF7DFF',
    },
    background: {
      default: '#13131b',
      paper: '#09090D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#D0CFD1',
    },
    divider : '#3A3940',
    mode: 'dark',
    // divider: {
    //   default: '#3A3940',
    //   light: '#3A3940',
    // },
    // gradient: {
    //   main: 'linear-gradient(45deg, #523FD7, #FF7DFF)',
    // },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(45deg, #523FD7, #FF7DFF)',
            color: '#FFFFFF',
            '&:hover': {
              background: '#FF7DFF',
            },
          },
        },
      ],
    },
  },
  
});

export default theme;
