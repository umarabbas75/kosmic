'use client'
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        gradient: true;
        white: true;
    }
  }

  // Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    gradient : true
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
    subtitle1: {
      lineHeight: '1', 
    },
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
      styleOverrides: {
        root: {
          borderRadius: 15, // Set border-radius for all buttons
        },
        outlined: {
          color: 'white', // Set text color for outlined variant
          borderColor: '#3A3940', // Set border color for outlined variant
          '&:hover': {
            borderColor: '#3A3940', // Adjust hover border color for outlined variant
          },
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'white', // Set the background color to white
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent', // Make text transparent
            backgroundImage: 'linear-gradient(45deg, #523FD7, #FF7DFF)', // Set gradient color for text
            '&:hover': {
              background: 'white', // Adjust hover background color
              color: 'transparent',
            },
          },
        },
        {
          props: { variant: 'white' },
          style: {
            background: 'white', 
            
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            fontSize : '1rem',
            background: 'linear-gradient(to right, #523FD7, #FF7DFF)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          },
        },
      ],
    },
  },
  
});

export default theme;
