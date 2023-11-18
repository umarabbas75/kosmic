import { Box, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Header = () => {
  return (
    <Paper elevation={0} square>
    <Toolbar>
       <Box sx={{display :'flex' , justifyContent : 'space-between'}}>
        {/* <Box sx={{display : 'flex' , gap : 1}}>
            <Box ></Box>
        </Box> */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <IconButton edge="start" color="inherit" aria-label="back">
                <KeyboardBackspaceIcon />
              </IconButton>
              <Box sx={{ ml: 1 }}>
                <Typography variant="h6">Media Management</Typography>
                <Typography variant="subtitle1" color="textSecondary">Draft campaign</Typography>
              </Box>
            </Box>
        <Box></Box>
       </Box>
    </Toolbar>
</Paper>
  )
}

export default Header