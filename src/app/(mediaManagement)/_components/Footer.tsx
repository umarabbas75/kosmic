
import { Box, Button, Paper, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Footer = ({onSubmit}:any) => {
  const theme = useTheme();
  const isLargerThanTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  
  return (
    <Paper elevation={0} square >
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: { mobile: '10px', tablet: '0px' }, flexDirection: { mobile: 'column', tablet: 'row' }, width: '100%', padding:{ mobile : '16px 4px',tablet : '32px 16px'} }}>
          <Button variant="outlined" sx={{ width: { mobile: '100%', tablet: '146px' }, height: '51px' }} >Back</Button>
          <Button onClick={onSubmit} variant="white" sx={{ width: { mobile: '100%', tablet: '234px' }, height: '52px',display : 'flex', gap :'120px' }}>
            <Typography variant="gradient">
              Next
            </Typography>
           {isLargerThanTablet && <ArrowIcon/>}
          
          </Button>


        </Box>
      </Toolbar>

    </Paper>
  )
}

export default Footer



const ArrowIcon = () =>{
  return   <svg style={{width : '20px'}} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1idedao-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardDoubleArrowRightIcon">
  <defs>
    <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#FF7DFF" />
      <stop offset="100%" stopColor="#523FD7" />
    </linearGradient>
  </defs>

  <path fill="url(#gradient1)" d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
  <path fill="url(#gradient1)" d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
</svg>
}