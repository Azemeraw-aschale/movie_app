import { Notifications } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';

export function NavBar() {
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

      ><Box sx={{ display: { xs: 'block', sm: 'none' } } >
        <ListIcon />} />
      </Box>
      <Box>
        <Typography variant="h6">{getTitle()}</Typography>
      </Box>
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Box>
          <Typography>
            <IconButton>
              <Notifications style={{ color: 'white' }} />
            </IconButton>
          </Typography>
        </Box>
        <Box>
          <Avatar></Avatar>
        </Box>
      </Box>
    </>); Box >
    ;
     >
    ;
  ;
}
