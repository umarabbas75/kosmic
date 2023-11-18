
import { Box, Button, Paper, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Footer = () => {
    const theme = useTheme();
    const isLargerThanTablet = useMediaQuery(theme.breakpoints.up('tablet'));
    console.log({isLargerThanTablet})
  return (
    <Paper elevation={0} square >
    <Toolbar>
    <Box sx={{ display: 'flex', justifyContent: 'space-between',gap : {mobile : '10px', tablet : '0px'},  flexDirection: { mobile: 'column', tablet: 'row' }, width: '100%', padding: '32px 16px' }}>
        <Button variant="outlined" sx={{width : {mobile : '100%',tablet : '146px'},height : '51px'}} >Back</Button>
        <Button variant="white" sx={{width : {mobile : '100%',tablet : '234px'},height : '52px'}}>
            <Typography variant="gradient"  sx={{ display : 'flex', gap : '123px'}} >
                <span>Next</span>
               {isLargerThanTablet && <KeyboardDoubleArrowRightIcon sx={{color : 'pink'}}/>}
                   
                </Typography>
        </Button>

       
    </Box>
    </Toolbar>

</Paper>
  )
}

export default Footer