import React, { useState, useRef, useEffect } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { RiMovie2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { SiCnn } from "react-icons/si";
import { FcBbc } from "react-icons/fc";
import { TbBrandDisney } from "react-icons/tb";
import { SiNbc } from "react-icons/si";
import { SiFox } from "react-icons/si";
import { MdOutlineAbc } from "react-icons/md";

const CardContainer = () => {
  const [cardIndex, setCardIndex] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const cardListRef = useRef(null);

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the content of Card 1.', videoUrl: 'https://www.youtube.com/watch?v=SPwc3BUp5Vg', icon: <RiMovie2Line /> },
    { id: 2, title: 'Card 2', content: 'This is the content of Card 2.', videoUrl: 'https://www.youtube.com/watch?v=_LWinkSulwU', icon: <RiMovie2Line /> },
    { id: 3, title: 'Card 3', content: 'This is the content of Card 3.', videoUrl: 'https://www.youtube.com/watch?v=_LWinkSulwU', icon: <RiMovie2Line /> },
    { id: 4, title: 'Card 4', content: 'This is the content of Card 4.', videoUrl: 'https://www.youtube.com/watch?v=AKyMQB9mABA', icon: <RiMovie2Line /> },
    { id: 5, title: 'Card 5', content: 'This is the content of Card 5.', videoUrl: 'https://www.youtube.com/watch?v=FhLT1rYBg-Q', icon: <RiMovie2Line /> },
    { id: 6, title: 'Card 6', content: 'This is the content of Card 6.', videoUrl: 'https://www.youtube.com/watch?v=FhLT1rYBg-Q', icon: <RiMovie2Line /> },
    { id: 7, title: 'Card 7', content: 'This is the content of Card 7.', videoUrl: 'https://www.youtube.com/watch?v=jycjmnet8Rw', icon: <RiMovie2Line /> },
    { id: 8, title: 'Card 8', content: 'Movies', videoUrl: 'https://www.youtube.com/watch?v=JxRXKrBznj4', icon: <RiMovie2Line /> },
  ];

  const handleCardClick = (index) => {
    const clickedCard = cards[index];
    setCardIndex(index);
    setVideoUrl(clickedCard.videoUrl);
  };

  useEffect(() => {
    if (cardIndex !== null && cardListRef.current) {
      const cardList = cardListRef.current;
      const cardWidth = 216; // Width of the card including margin
      const containerWidth = cardList.offsetWidth;
      const totalCardsWidth = cards.length * cardWidth;

      let translateX = 0;

      if (cardIndex * cardWidth + cardWidth > containerWidth) {
        translateX = (cardIndex - Math.floor(containerWidth / cardWidth) + 1) * cardWidth;
      }

      cardList.style.transform = `translateX(-${translateX}px)`;
    }
  }, [cardIndex, cards.length]);

  return (
    <Box className="container" style={{ height: '100vh', position: 'relative', backgroundColor: '#333', color: '#fff' }}>
      <Box
        className="foreground-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(6, 8, 29, 0.8), rgba(6, 8, 29, 0.8)), radial-gradient(circle at top right, rgba(255, 255, 255, 0.5), transparent)',
          zIndex: 999, // High z-index to ensure it is on top
          pointerEvents: 'none', // Ensures overlay does not block interaction
        }}
      />
      <Grid container style={{ height: '100%', position: 'relative', zIndex: 1 }}>
        <Grid item xs={2} className="sidebar" style={{ height: '100vh', width: '40vw', position: 'sticky', top: 0, background: 'red' }}>
          {/* Add your sidebar content here */}
          <Box sx={{display:'flex',color:'white'}}>
            <Box sx={{m:10,display:'flex',flexDirection:'column',alignItems:'center',justifyContents:'center', padding:'20'}}>
              <PiTelevisionSimpleFill style={{ width: '50px', height: '50px',background:"black",borderRadius:'50%',padding:'5' ,marginTop:'150px'}}/>
              <IoStarSharp style={{ width: '50px', height: '50px',background:"black",borderRadius:'50%',padding:'5',marginTop:'100px' }}/>
              <CiClock2 style={{ width: '50px', height: '50px',background:"black",borderRadius:'50%',padding:'5', marginTop:'100px'}}/>
            </Box>
            <Box >
              <SiFox/>Fox
              <MdOutlineAbc/>ABC TV
              <PiTelevisionSimpleFill/>MBC TV
            <SiNbc/>NBC
            <PiTelevisionSimpleFill/>HBO
              <PiTelevisionSimpleFill/>City Tv
              <FcBbc/>BBC
              <TbBrandDisney/>DIsney
              <SiCnn/>CNN

            </Box>
          </Box>
        </Grid>
        <Grid item xs={10} style={{ display: 'flex', flexDirection: 'column' }}>
          <Box className="media-player" style={{ height: '60vh', width: '90%', background: 'wheat', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            {cardIndex !== null && videoUrl && (
              <iframe
                title="Video Player"
                src={videoUrl}
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            )}
            {cardIndex !== null && (
              <Box
                className="overlay"
                style={{
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
          <Grid container className="card-wrapper" style={{ height: '40vh', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', position: 'relative', marginTop: '16px' }}>
            <Box ref={cardListRef} className="card-list" style={{ display: 'flex', justifyContent: 'flex-start', transition: 'transform 0.3s ease-out' }}>
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  className={`card ${index === cardIndex ? 'active' : ''}`}
                  style={{
                    minWidth: '200px',
                    margin: '8px',
                    cursor: 'pointer',
                    border: '0.5px lightgray solid',
                    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    transform: index === cardIndex ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: index === cardIndex ? '0px 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
                    position: 'relative',
                    zIndex: index === cardIndex ? 3 : 2,
                    backgroundColor: '#637485',
                    color: 'white'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {React.cloneElement(card.icon, { size: 60, color: 'white' })} {/* Adjust the size as needed */}
                    </Box>
                    <Typography variant="h5" style={{ marginTop: '8px' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'center' }}>
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
