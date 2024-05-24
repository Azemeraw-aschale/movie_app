import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, AppBar, Typography, IconButton, colors } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import { Favorite, Share } from '@mui/icons-material';

const StyledSidebar = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '200px',
  backgroundColor: 'blue',
  padding: '24px',
  overflow: 'auto',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems: 'center',
  '& > *': {
    marginBottom: '16px',
    // colors:'color.white'
  },
});

const StyledHeader = styled(AppBar)({
  position: 'fixed',
  top: 0,
  left: '200px',
  right: 0,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
});

const StyledSubHeader = styled(Box)({
  position: 'fixed',
  top: '64px',
  left: '250px',
  right: 0,
  backgroundColor: 'background.paper',
  padding: '16px 0',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  
  transition: 'all 0.3s ease',
  '& > *': {
    marginRight: '0',
    padding: '8px 16px',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

const StyledCardContainer = styled(Box)({
//   marginLeft: '300px',
  marginTop: '128px',
//   width: 'calc(100% - 300px)',
  overflow: 'auto',
  whiteSpace: 'nowrap',
  padding: ' 24px 0px',
  '& > *': {
    marginRight: '24px',
    position: 'relative',
    display: 'inline-block',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  },
  '& .card-image': {
    width: '300px',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },
});

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState('Recommended');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledSidebar>
        <IconButton>
          <AccessTimeIcon />
        </IconButton>
        <IconButton>
          <DateRangeIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </StyledSidebar>

      <Box sx={{ width: 'calc(100% - 300px)', marginLeft: '300px' }}>
        <StyledHeader>
          <Typography variant="h6">Movies</Typography>
          <Box>
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </StyledHeader>

        <StyledSubHeader>
          <Typography
            className={activeTab === 'Recommended' ? 'active' : ''}
            onClick={() => handleTabClick('Recommended')}
          >
            Recommended
          </Typography>
          <Typography
            className={activeTab === 'Popular' ? 'active' : ''}
            onClick={() => handleTabClick('Popular')}
          >
            Popular
          </Typography>
          <Typography
            className={activeTab === 'Featured' ? 'active' : ''}
            onClick={() => handleTabClick('Featured')}
          >
            Featured
          </Typography>
        </StyledSubHeader>

        <StyledCardContainer>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie1.jpg)' }}>
              <IconButton>
                <Favorite />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie2.jpg)' }}>
              <IconButton>
                <Favorite/>
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
          {/* Add 10 more card containers */}
          <Box className="card-container">
            <Box className="card-image" style={{ backgroundImage: 'url(https://example.com/movie11.jpg)' }}>
              <IconButton>
                <Favorite />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
          </Box>
        </StyledCardContainer>
      </Box>
    </Box>
  );
};

export default MyComponent;