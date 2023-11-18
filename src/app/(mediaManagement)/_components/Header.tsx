import { Avatar, Box, IconButton, Paper, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Header = () => {
  const theme = useTheme()
  return (
    <Paper elevation={0} square sx={{
      borderBottom: `1px solid ${theme.palette.divider}`,
    }}>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding:{mobile : '16px 8px', tablet : '32px 16px'} }}>

          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <IconButton sx={{ backgroundColor: '#171515', borderRadius: '7px' }} edge="start" color="inherit" aria-label="back">
              <KeyboardBackspaceIcon />
            </IconButton>
            <Box sx={{ ml: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>Media Management</Typography>
              <Typography variant="subtitle1" color="textSecondary">Draft campaign</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <Box sx={{ ml: 1, textAlign: 'end', display: { mobile: 'none', tablet: 'block' } }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>Jane Cooper</Typography>
              <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 400 }}>Change profile</Typography>
            </Box>
            <Avatar
              alt="profile pic"
              src="/profilepic.jpeg"
              sx={{
                backgroundColor: '#171515',
                borderRadius: '50%',
                marginLeft: '10px',
                height: 45,
                width: 45
              }}
            />

          </Box>
        </Box>
      </Toolbar>
    </Paper>
  )
}

export default Header