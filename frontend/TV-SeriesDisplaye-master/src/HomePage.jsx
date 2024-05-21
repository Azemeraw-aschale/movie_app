import React from 'react';
import Box from '@mui/material/Box';
import Content from './Pages/Contentes/Content';
import NavBar from './Pages/AppBar/NavBar';
import SideBar from './Pages/SideBar/SideBar';
const Home = () => {
  return (
   <Box display="flex" height="100vh">
      <SideBar />
      <Box flexGrow={1} display="flex" flexDirection="column" flex={6}>
        <NavBar/>
       <Content/>
      </Box>
    </Box>
  );
}

export default Home;