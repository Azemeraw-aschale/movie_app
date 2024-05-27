import { Notifications } from '@mui/icons-material';
import { Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import {useLocation } from 'react-router-dom';
// import ListIcon from '@mui/icons-material/List';

function NavBar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/Channel':
        return 'Channel';
      case '/Program':
        return 'Program';
      default:
        return 'Unknown';
    }
  };

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        p={2}
        bgcolor="black"
        color="white"
      >
        <Box >
          <Typography variant="h6">{getTitle()}</Typography>
        </Box>
        
        <Box >
          <Box>
            <Typography>
              <IconButton>
                <Notifications style={{ color: 'white' }} />
              </IconButton>
            </Typography>
          </Box>
          <Box>
            <Avatar />
          </Box>
        </Box>
      </Box>
      <Toolbar /> {/* Add a toolbar to push content below the fixed navbar */}
    </>
  );
}

export default NavBar;
