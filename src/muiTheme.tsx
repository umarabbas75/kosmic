'use client'
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const primaryColor = '#523FD7';
const secondaryColor = '#FF7DFF';
const backgroundColor = '#13131b';
const paperColor = '#09090D';
const textColorPrimary = '#FFFFFF';
const textColorSecondary = '#D0CFD1';
const dividerColor = '#3A3940';
const gradientColorStart = '#523FD7';
const gradientColorEnd = '#FF7DFF';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
    white: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    gradient: true
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 745,
      laptop: 1440,
      desktop: 1728,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    subtitle1: {
      lineHeight: '1',
    },
  },
  palette: {
    primary: {
      main:primaryColor,

    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: backgroundColor,
      paper: paperColor,
    },
    text: {
      primary: textColorPrimary,
      secondary: textColorSecondary,
    },
    divider: dividerColor,
    mode: 'dark',

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 32,
        },
        outlined: {
          color: 'white',
          borderColor: '#3A3940',
          '&:hover': {
            borderColor: '#3A3940',
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
            backgroundImage: `linear-gradient(45deg, ${gradientColorStart}, ${gradientColorEnd})`, // Set gradient color for text
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
            fontSize: '1rem',
            background: `linear-gradient(to right, ${gradientColorStart},${gradientColorEnd})`,
           
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          },
        },
      ],
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          
          '&:before': {
            borderBottom: 'none !important',
          },
          '&:after': {
            borderBottom: 'none !important',
          },

        },
        root: {
          background: '#3A394080',
          borderRadius: '5px',
        
          '& .MuiFormLabel-root': {
            left: '10px'
          },
          '& .MuiInputBase-root': {
            margin: 0,
            height: '60px',
            position: "relative"

          },
          '& .MuiInputBase-input': {
            paddingLeft: '10px !important'
          },
          '& .MuiInputLabel-shrink': {
            top: 3
          },
          '& .MuiInputBase-root:before': {
            position: 'absolute',
            inset: 0,
            borderRadius: '5px',
            padding: '1px',
            background: `linear-gradient(45deg, ${gradientColorStart},${gradientColorEnd})`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          }
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        thumb: {
          '&:after': {
            width: "20px",
            height: "20px",
            backgroundColor: secondaryColor,
          },
        },
        root: {
          '.MuiSlider-track': {
            backgroundImage: `linear-gradient(45deg,${gradientColorStart},${gradientColorEnd})`,
            border: 'none',
          },
          '.MuiSlider-thumb': {
            backgroundColor: 'transparent',
            boxShadow: `0 0 0 3px ${secondaryColor}`,
            width: '30px',
            height: '30px'
          },


        },
      },
    },
  },

});

export default theme;
