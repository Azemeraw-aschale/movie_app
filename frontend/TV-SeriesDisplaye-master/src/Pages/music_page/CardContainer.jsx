import React, { useState, useRef, useEffect } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { RiMovie2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { SiCnn, SiFox, SiNbc } from "react-icons/si";
import { FcBbc } from "react-icons/fc";
import { TbBrandDisney } from "react-icons/tb";
import { MdOutlineAbc } from "react-icons/md";
import ReactPlayer from 'react-player';

const CardContainer = ({  autoplay = false}) => {
  const [cardIndex, setCardIndex] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const cardListRef = useRef(null);

  const cards = [
    { id: 1, title: 'FOX', content: 'This is the content of Card 1.', videoUrl: 'https://www.youtube.com/shorts/12AjixuM9bM', icon: <SiFox/> },
    { id: 2, title: 'ABC TV', content: 'This is the content of Card 2.', videoUrl: 'https://www.youtube.com/embed/FHHKrf9Dpvs?si=osRhfgBnQdmqfy4e', icon: <MdOutlineAbc /> },
    { id: 3, title: 'AMC TV', content: 'This is the content of Card 3.', videoUrl: 'https://www.youtube.com/embed/-RsAP6A5rNs?si=s5esD7bb2qV_KzoA', icon: <PiTelevisionSimpleFill /> },
    { id: 4, title: 'NBC', content: 'This is the content of Card 4.', videoUrl: 'https://www.youtube.com/embed/UPkMkIOzej8?si=76bk47E8XcF2JFD7', icon: <SiNbc />  },
    { id: 5, title: 'HBO', content: 'This is the content of Card 5.', videoUrl: 'https://www.youtube.com/embed/UPkMkIOzej8?si=76bk47E8XcF2JFD7', icon: <RiMovie2Line /> },
    { id: 6, title: 'BBC', content: 'This is the content of Card 6.', videoUrl: 'https://youtube.com/shorts/12AjixuM9bM?si=jmo_1w57mtdu4opX', icon: <FcBbc /> },
    { id: 7, title: 'ESPN', content: 'This is the content of Card 7.', videoUrl: 'https://www.youtube.com/watch?v=jycjmnet8Rw', icon: <RiMovie2Line /> },
    { id: 8, title: 'Disnepy', content: 'Movies', videoUrl: 'https://www.youtube.com/watch?v=JxRXKrBznj4', icon: <RiMovie2Line /> },
    { id: 9, title: 'CNN', content: 'Movies', videoUrl: 'https://www.youtube.com/watch?v=JxRXKrBznj4', icon: <RiMovie2Line /> },

  ];

  const handleCardClick = (index) => {
    const clickedCard = cards[index];
    setCardIndex(index);
    setVideoUrl(clickedCard.videoUrl);
  };

  useEffect(() => {
    if (cardIndex !== null && cardListRef.current) {
      const cardList = cardListRef.current;
      const cardWidth = 240; // Adjusted width to fit 4 cards per window
      const containerWidth = cardList.offsetWidth;

      let translateX = 0;

      if (cardIndex * cardWidth + cardWidth > containerWidth) {
        translateX = (cardIndex - Math.floor(containerWidth / cardWidth) + 1) * cardWidth;
      }

      cardList.style.transform = `translateX(-${translateX}px)`;
    }
  }, [cardIndex, cards.length]);

  return (
    <Box className="container" sx={{ height: '100vh', position: 'relative', backgroundColor: '#48456e', color: '#fff' }}>
     
      <Grid container sx={{ height: '100%', position: 'relative', zIndex: 1 }}>
        <Grid item xs={3} className="sidebar" sx={{
          height: '100vh',
          position: 'sticky',
          top: 0,
          background: '#0d1133',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontWeight:'bold',
          fontSize:'30px',
          size:'30px',
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            justifyContent: 'space-between',
            
            height: '100vh',
            paddingLeft:'10px',
            background: '#0d1133',
            fontWeight:'bold',
            fontSize:'12px',
            size:'10px',
            gap:'10',
          }
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-evenly',
            alignItems:'center',
            color: 'white',
            mt: 2,
            '@media (max-width: 600px)': {
              display: 'none',
            },
            '@media (max-width: 760)': {
              display: 'flx',
              justifyContent:'space-between',
              alignItems:'center',
              fontSize:'20px',
            }
            
          }}>
            <PiTelevisionSimpleFill sx={{ width: '60px', height: '60px', background: "black", borderRadius: '50%', padding: '10px', mb: 4, '@media (max-width: 600px)': { mb: 0, mr: 2 } }} />
            <IoStarSharp sx={{ width: '50px', height: '50px', background: "black", borderRadius: '50%', padding: '5px', mb: 4, '@media (max-width: 600px)': { mb: 0, mr: 2 } }} />
            <CiClock2 sx={{ width: '50px', height: '50px', background: "black", borderRadius: '50%', padding: '5px', mb: 4, '@media (max-width: 600px)': { mb: 0, mr: 2 } }} />
          </Box>
          <Box sx={{
            color: 'white',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'column',
            mr: 2,
            cursor:'pointer',
          
            padding:'30px 0px 30px 50px',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh',
              background: '#0d1133',
              padding:'20px 0px 20px 10px'
              
            }
          }}>
            <Box  onClick={() => handleCardClick(0)} sx={{cursor:'pointer'}}><SiFox/> Fox</Box>
            <Box  onClick={() => handleCardClick(1)} ><MdOutlineAbc /> ABC TV</Box>
            <Box onClick={() => handleCardClick(2)}><PiTelevisionSimpleFill /> MBC TV</Box>
            <Box onClick={() => handleCardClick(3)}><SiNbc /> NBC</Box>
            <Box onClick={() => handleCardClick(4)}><PiTelevisionSimpleFill /> HBO</Box>
            <Box onClick={() => handleCardClick(5)}><PiTelevisionSimpleFill /> City TV</Box>
            <Box onClick={() => handleCardClick(6)}><FcBbc /> BBC</Box>
            <Box onClick={() => handleCardClick(7)}><FcBbc /> ESNP</Box>
            <Box onClick={() => handleCardClick(8)}><TbBrandDisney /> Disney</Box>
            <Box onClick={() => handleCardClick(9)}><SiCnn /> CNN</Box>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box className="media-player" sx={{
            height: '50vh',
            width: '98%',
            background: '#36316e',
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            mt:'20px',
            '@media (max-width: 600px)': {
              height: '50vh',
              width: '90%',
            }
          }}>
            {cardIndex !== null && videoUrl && (
              // <iframe
              //   title="Video Player"
              //   src={videoUrl}
              //   style={{ width: '100%', height: '100%', border: 'none' }}
              // />

              // <iframe width="100%" height="90%"
              //  src={videoUrl}
              //   title="YouTube video player"
              //    frameborder="0"
              //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              // referrerpolicy="strict-origin-when-cross-origin" 
              // allowfullscreen>

              // </iframe>
              <ReactPlayer
              
              
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              playing={autoplay}
              loop
              muted
            />
            )}
            {cardIndex !== null && (
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 2,
                }}
              />
            )}
          </Box>
          <Grid container className="card-wrapper" sx={{
            height: '40vh',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            position: 'relative',
            mt: 2,
            '@media (max-width: 600px)': {
              height: '30vh',
            }
          }}>
            <Box ref={cardListRef} className="card-list" sx={{ display: 'flex', justifyContent: 'flex-start', transition: 'transform 0.3s ease-out' }}>
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  className={`card ${index === cardIndex ? 'active' : ''}`}
                  sx={{
                    minWidth: '15vw',
                    m: 1,
                    cursor: 'pointer',
                    border: '0.5px lightgray solid',
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    transform: index === cardIndex ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: index === cardIndex ? '0px 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                    position: 'relative',
                    zIndex: index === cardIndex ? 3 : 2,
                    backgroundColor: '#1e1582',
                    color: 'white',
                   
                    '@media (max-width: 600px)': {
                      flexWrap:'wrap',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: '50vh',
                      background: '#1a205c',
                      width:'200px'
                    }
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '90%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center',background:'#392f80', '@media (max-width: 600px)': { width: '80px', height: '80px' } }}>
                      {React.cloneElement(card.icon, { size: 60, color: 'white', background:'black'})} {/* Adjust the size as needed */}
                    </Box>
                    <Typography variant="h5" sx={{ mt: 1, '@media (max-width: 600px)': { fontSize: '1rem' } }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', '@media (max-width: 600px)': { fontSize: '0.8rem' } }}>
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardContainer;
