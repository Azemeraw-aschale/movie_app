import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const SidebarContent = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const sidebarItems = ['ABC', 'HBO', 'art', 'POU', 'opt', 'rtsd', 'jgdfjkj'];

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 200,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          {sidebarItems.map((item) => (
            <ListItem
              key={item}
              button
              selected={selectedItem === item}
              onClick={() => handleItemClick(item)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mb: 3,scroll:'none'  }}>
          {/* Video Player */}
          <Box
            sx={{
              height: '400px',
              border: '1px solid gray',
              marginBottom: '20px',
              width: '700px',
            }}
          >
            {/* Add your video player component here */}
          </Box>
        </Box>
        <Box
          sx={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
            '&::-webkit-scrollbar': {
              width: '8px',
              height: '8px',
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'transparent',
            },
            '&:hover::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '4px',
            },
          }}
        >
          {/* Cards */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '10px',
              p: '10px',
              width: 'fit-content',
              maxWidth: '100%',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': {
                width: '0',
                height: '0',
                background: 'transparent',
                display: 'none',
              },
            }}
          >
            {Array.from(Array(10).keys()).map((index) => (
              <Box
                key={index}
                sx={{
                  width: '200px',
                  height: '300px',
                  border: '1px solid gray',
                }}
              >
                {/* Add your card content here */}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarContent;