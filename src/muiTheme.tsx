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
    fontFamily: 'Poppins, sans-serif',
    subtitle1: {
      lineHeight: '1', 
    },
  },
  palette:  {
    primary: {
      main: '#523FD7',
    
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
           left : '10px'
          },
          '& .MuiInputBase-root': {
           margin : 0,
           height : '60px',
           position: "relative"
          
          }, 
          '& .MuiInputBase-input': {
          paddingLeft : '10px !important'
          }, 
          '& .MuiInputLabel-shrink': {
          top : 3
          },
          '& .MuiInputBase-root:before': {
            position: 'absolute',
            inset: 0,
            borderRadius: '5px',
            padding: '1px', 
            background: 'linear-gradient(45deg, #523FD7, #FF7DFF)',
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
          thumb:{
            '&:after': {
              width: "20px",
              height: "20px",
              backgroundColor : '#FF7DFF',
            },
          },
          root: {
            '.MuiSlider-track': {
              backgroundImage: 'linear-gradient(45deg, #523FD7, #FF7DFF)',
              border: 'none',
            },    
            '.MuiSlider-thumb': {
            backgroundColor : 'transparent',
            boxShadow : '0 0 0 3px #FF7DFF',
            width: '30px',
    height: '30px'
            },
          
        
          },
        },
      },
  },
  
});

export default theme;
