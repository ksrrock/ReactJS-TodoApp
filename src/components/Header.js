import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Toolbar } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Todo List
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
