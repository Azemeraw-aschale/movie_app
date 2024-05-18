const express = require('express');
const { pool} = require('../db'); 

const router = express.Router();

// createTables();

router.get('/api/movies', async (req, res) => {
    try {
      const query = 'SELECT * FROM movies;';
      const result = await pool.query(query);
      const movies = result.rows;
  
      res.status(200).json({ movies });
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'An error occurred while fetching movies.' });
    }
  });
  router.get('/api/movies/:id', async (req, res) => {
    try {
      const movieId = req.params.id;
      const query = 'SELECT * FROM movies WHERE id = $1;';
      const result = await pool.query(query, [movieId]);
  
      if (result.rows.length > 0) {
        const movie = result.rows[0];
        res.status(200).json({ movie });
      } else {
        res.status(404).json({ error: 'Movie not found.' });
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
      res.status(500).json({ error: 'An error occurred while fetching the movie.' });
    }
  });
  router.get('/api/channels', async (req, res) => {
    try {
      const query = 'SELECT * FROM channels;';
      const result = await pool.query(query);
      const channels = result.rows;
  
      res.status(200).json({ channels });
    } catch (error) {
      console.error('Error fetching channels:', error);
      res.status(500).json({ error: 'An error occurred while fetching channels.' });
    }
  });
router.get('/api/channels/:id' , async (req,res)=> {
try {
    

    const channelId =req.params.id;
    const query='select * from channels wher id=$1;';
    const result = await pool.query(query,[channelId]);

    if(result.rows.length>0){
        const channel=result.rows[0];
        res.status(200).json({channel});
    }
    else{
        res.status(404).json({error:'channel not found'})
    }
} catch (error) {
    console.error('Error fetching channel:', error);
    res.status(500).json({ error: 'An error occurred while fetching the channel.' });
    
}
});
module.exports = router;