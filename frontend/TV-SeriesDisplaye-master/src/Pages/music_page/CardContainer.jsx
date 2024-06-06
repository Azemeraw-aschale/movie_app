import React, { useState, useRef, useEffect } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { RiMovie2Line } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { SiCnn, SiFox, SiNbc, SiNormalizedotcss } from "react-icons/si";
import { FcBbc, FcFilm, FcFilmReel } from "react-icons/fc";
import { TbBrandDisney } from "react-icons/tb";
import { MdOutlineAbc } from "react-icons/md";
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMusic } from '../../apis/cardSlice';
import Duration from './Duration';
import { FaStar } from 'react-icons/fa';

const CardContainer = ({  autoplay = false}) => {
  const [url, setUrl] = useState(null);
  const [pip, setPip] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [controls, setControls] = useState(false);
  const [light, setLight] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [durationn, setDurationn] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [loop, setLoop] = useState(false);
  const [seeking, setSeeking] = React.useState(false);
  const playerRef = React.useRef(null);
  const videoRef = React.useRef(null);


  const load = (url) => {
    setUrl(url);
    setPlayed(0);
    setLoaded(0);
    setPip(false);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleStop = () => {
    setUrl(null);
    setPlaying(false);
  };

  const handleToggleControls = () => {
    const currentUrl = url;
    setControls(!controls);
    setUrl(null);
    setUrl(currentUrl);
  };

  const handleToggleLight = () => {
    setLight(!light);
  };

  const handleToggleLoop = () => {
    setLoop(!loop);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleToggleMuted = () => {
    setMuted(!muted);
  };

  const handleSetPlaybackRate = (e) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  const handleOnPlaybackRateChange = (speed) => {
    setPlaybackRate(parseFloat(speed));
  };

  const handleTogglePIP = () => {
    setPip(!pip);
  };

  const handlePlay = () => {
    console.log('onPlay');
    setPlaying(true);
  };

  const handleEnablePIP = () => {
    console.log('onEnablePIP');
    setPip(true);
  };

  const handleDisablePIP = () => {
    console.log('onDisablePIP');
    setPip(false);
  };

  const handlePause = () => {
    console.log('onPause');
    setPlaying(false);
  };
  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
    if (seeking) {
      setPlayed(parseFloat(e.target.value));
    }
  };

  const handleSeekMouseUp = (e) => {
    if (seeking) {
      setSeeking(false);
      const seekTo = parseFloat(e.target.value);
      if (playerRef.current && playerRef.current.seekTo) {
        playerRef.current.seekTo(seekTo);
      }
    }
  };
  const handleBuffer = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused && !video.seeking) {
        console.log('Buffering...');
      }
    }
  };
  const handleReady = () => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('waiting', handleBuffer);
      video.addEventListener('playing', handleBuffer);
    }
  };
  
  

  const handleProgress = (state) => {
    console.log('onProgress', state);
    if (!seeking) {
      setPlayed(state.played);
      setLoaded(state.loaded);
    }
  };

  const handleEnded = () => {
    console.log('onEnded');
    setPlaying(loop);
  };

  const handleDuration = (duration) => {
    console.log('onDuration', duration);
    setDurationn(duration);
  };

  const handleClickFullscreen = () => {
    screenfull.request(document.querySelector('.react-player'));
  };

  const renderLoadButton = (url, label) => {
    return <button onClick={() => load(url)}>{label}</button>;
  };

  let player;

  const ref = (ref) => {
    player = ref;
  };
  const [showControls, setShowControls] = useState(true);
const [open, setOpen] = useState(false);
const dispatch = useDispatch();
const [cardIndex, setCardIndex] = useState(null);
const [videoUrl, setVideoUrl] = useState('');
const cardListRef = useRef(null);

useEffect(() => {
  dispatch(fetchMusic());
}, [dispatch]);

const music = useSelector((state) => state.music.data);
console.log("this is my life.,.,,,..,", music);
const movies = Array.isArray(music?.movies) ? music.movies : [];
console.log("first music", movies);

const [firstMovie] = movies; // Extracting the first movie object
  
// Destructuring assignment
const {
  categories = {},
  categoryid,
  channelid,
  channels = [],
  description,
  duration,
  id,
  title,
  typeid,
  types = {},
  videourl
} = firstMovie || {};
// const imageUrl=channels.img;
console.log('image is', channels.img)
const imageUrl = channels.img;
console.log("image display on",imageUrl)

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
}, [cardIndex, movies.length]);

const handleCardClick = (index) => {
  const clickedMovie = movies[index];
  setCardIndex(index);
  if (clickedMovie.videourl) {
    setVideoUrl(clickedMovie.videourl);
  }
};

  

  return (
    // fetchMovies(),
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

      {movies.map((movie, index) => (
        // console.log("idididididdididididdi",movie.id),
          <Box key={movie.id} onClick={() => handleCardClick(index)} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {movie.channels.img ? (
              <img src={movie.channels.img} alt={movie.channels.name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            ) : (
              <span>No image available</span>
            )}
            {movie.channels.name || 'Unknown'}
          </Box>
        ))}
          
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
  mt: '20px',
  '@media (max-width: 600px)': {
    height: '50vh',
    width: '90%',
  }
}}>
  
  {cardIndex !== null && videoUrl && (
    <ReactPlayer
      ref={playerRef}
      
      className='react-player'
      width='100%'
      height='100%'
      url={videoUrl}
      pip={pip}
      playing={playing}
      controls={controls}
      light={light}
      loop={loop}
      playbackRate={playbackRate}
      volume={volume}
      muted={muted}
      onReady={handleReady}
      onStart={() => console.log('onStart')}
      onPlay={handlePlay}
      onEnablePIP={handleEnablePIP}
      onDisablePIP={handleDisablePIP}
      onPause={handlePause}
      onBuffer={() => console.log('onBuffer')}
      onPlaybackRateChange={handleOnPlaybackRateChange}
      onSeek={e => console.log('onSeek', e)}
      onEnded={handleEnded}
      onError={e => console.log('onError', e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
      onPlaybackQualityChange={e => console.log('onPlaybackQualityChange', e)}
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
  {movies.map((movie, index) => (
    <Card
      key={movie.id}
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
        backgroundColor: 'rgba(30, 21, 130, 0.8)', // Updated with alpha value
        color: 'white',
        '@media (max-width: 600px)': {
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '50vh',
          background: 'rgba(26, 32, 92, 0.8)', // Updated with alpha value
          width: '200px',
        },
      }}
      onClick={() => handleCardClick(index)}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
  sx={{
    width: '90%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    '@media (max-width: 600px)': { width: '80px', height: '80px' },
  }}
>       {/* Render the static icon */}
          {/* <SiFox size={60} color="white" /> */}
          {/* Render the dynamic icon from the database */} 
          {/* {movie.channels.img} */}
        
          {imageUrl ? (
      <img src={movie.channels.img} alt="Channel Icon" style={{ width: '60px', height: '60px' }} />
          ) : (
            <p>No image available</p>
          )}
         
        </Box>
        <Typography variant="h5" sx={{ mt: 1, '@media (max-width: 600px)': { fontSize: '1rem' } }}>
          {movie.title} - {movie.types.name}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', '@media (max-width: 600px)': { fontSize: '0.8rem' } }}>
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  ))}
</Box>
            <Box sx={{ width: '60%', display: 'flex',}}>
                <React.Fragment>
                <table>
                        <tbody>
                          <tr>
                            <th>Controls</th>
                            <td>
                              <button onClick={handleStop}>Stop</button>
                              <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                              <button onClick={handleClickFullscreen}>Fullscreen</button>
                              {light &&
                                <button onClick={() => player.showPreview()}>Show preview</button>}
                              {ReactPlayer.canEnablePIP(url) &&
                                <button onClick={handleTogglePIP}>{pip ? 'Disable PiP' : 'Enable PiP'}</button>}
                            </td>
                          </tr>
                          <tr>
                            <th>Speed</th>
                            <td>
                              <button onClick={handleSetPlaybackRate} value={1}>1x</button>
                              <button onClick={handleSetPlaybackRate} value={1.5}>1.5x</button>
                              <button onClick={handleSetPlaybackRate} value={2}>2x</button>
                            </td>
                          </tr>
                          <tr>
                            <th>Seek</th>
                            <td>
                              <input
                                  type="range"
                                  min={0}
                                  max={1}
                                  step="any"
                                  value={played}
                                  onMouseDown={handleSeekMouseDown}
                                  onChange={handleSeekChange}
                                  onMouseUp={handleSeekMouseUp}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>Volume</th>
                            <td>
                              <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor='controls'>Controls</label>
                            </th>
                            <td>
                              <input id='controls' type='checkbox' checked={controls} onChange={handleToggleControls} />
                              <em>&nbsp; Requires player reload</em>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor='muted'>Muted</label>
                            </th>
                            <td>
                              <input id='muted' type='checkbox' checked={muted} onChange={handleToggleMuted} />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor='loop'>Loop</label>
                            </th>
                            <td>
                              <input id='loop' type='checkbox' checked={loop} onChange={handleToggleLoop} />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <label htmlFor='light'>Light mode</label>
                            </th>
                            <td>
                              <input id='light' type='checkbox' checked={light} onChange={handleToggleLight} />
                            </td>
                          </tr>
                          <tr>
                            <th>Played</th>
                            <td><progress max={1} value={played} /></td>
                          </tr>
                          <tr>
                            <th>Loaded</th>
                            <td><progress max={1} value={loaded} /></td>
                          </tr>
                        </tbody>
                      </table>
                     
                </React.Fragment>
                </Box>
          </Grid>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardContainer;
