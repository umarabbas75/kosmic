import { Avatar, Box, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Header = () => {
  return (
    <Paper elevation={0} square>
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '32px 16px' }}>
          {/* <Box sx={{display : 'flex' , gap : 1}}>
            <Box ></Box>
        </Box> */}
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
            <Box sx={{ ml: 1, textAlign: 'end' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>Jane Cooper</Typography>
              <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 400 }}>Change profile</Typography>
            </Box>
            <Avatar
              alt="profile pic"
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F474x%2Fe0%2F62%2Fd1%2Fe062d152da920255bd8e8066e2dfa811.jpg&tbnid=JrOITDP4upImlM&vet=12ahUKEwj_x-KYxs2CAxWNU6QEHWZKAMkQMygKegQIARBY..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F527554543823825925%2F&docid=D90ZHPsuffSRGM&w=400&h=600&q=dummy%20girl%20image%20face%20profile%20pic&ved=2ahUKEwj_x-KYxs2CAxWNU6QEHWZKAMkQMygKegQIARBY"  // replace with the actual path to your image
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