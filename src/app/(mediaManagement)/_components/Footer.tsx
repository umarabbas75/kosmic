
import { Box, Button, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Paper elevation={0} square >
    <Toolbar>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '32px 16px' }}>
        <Button variant="outlined" >Back</Button>
        <Button variant="white" >
            <Typography variant="gradient" >NEXT</Typography>
        </Button>

       
    </Box>
    </Toolbar>

</Paper>
  )
}

export default Footer