const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const router = express.Router();

// createTables();

router.get('/api/movies', async (req, res) => {
  try {
    const movies = await prisma.movies.findMany({
      include: {
        channels: true,
        types: true,
        categories: true,
      },
    });

    res.status(200).json({ movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'An error occurred while fetching the movies.' });
  }
});
  router.get('/api/movies/:id', async (req, res) => {
    try {
      const movieId = req.params.id;
      const query = 'SELECT * FROM movies WHERE id = $1;';
      const result = await prisma.query(query, [movieId]);
  
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
      const channels = await prisma.channels.findMany();
      res.status(200).json({ channels });
    } catch (error) {
      console.error('Error fetching channels:', error);
      res.status(500).json({ error: 'An error occurred while fetching channels.' });
    }
  });

  router.get('/api/catagories', async (req, res) => {
    try {
      const catagory = await prisma.categories.findMany();
      res.status(200).json({ catagory });
    } catch (error) {
      console.error('Error fetching channels:', error);
      res.status(500).json({ error: 'An error occurred while fetching channels.' });
    }
  });

  router.get('/api/types', async (req, res) => {
    try {
      const types = await prisma.types.findMany();
      res.status(200).json({ types });
    } catch (error) {
      console.error('Error fetching channels:', error);
      res.status(500).json({ error: 'An error occurred while fetching channels.' });
    }
  });


  router.get('/api/movies/search', async (req, res) => {
    const { query } = req.query;
  
    try {
      const movies = await prisma.movies.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
      });
  
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


  router.get('/api/movies/filter', async (req, res) => {
    const { category, duration } = req.query;
  
    try {
      const movies = await prisma.movies.findMany({
        where: {
          categories: { some: { id: parseInt(category) } },
          duration: { gte: parseInt(duration) },
        },
      });
  
      res.json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });



router.get('/api/channels/:id' , async (req,res)=> {
try {
    

    const channelId =req.params.id;
    const query='select * from channels wher id=$1;';
    const result = await prisma.query(query,[channelId]);

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
router.get('/api/mov/count', async (req, res) => {
  try {
    // Fetch the count of movies
    const moviesCount = await prisma.movies.count();

    console.log("Movies count:", moviesCount);

    // Return the count as the response
    res.json({ count: moviesCount });
  } catch (error) {
    // Handle any errors
    console.error('Error fetching movie count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/api/users/count', async (req, res) => {
  try {
    // Retrieve the count of programs from the database
    const userCount = await prisma.users_auth.count();
    console.log("your user is  kkk",userCount)
    // Return the count as the response
    res.json({ count: userCount });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/api/chanals/count', async (req, res) => {
  try {
    // Retrieve the count of programs from the database
    const chanalCount = await prisma.channels.count();
    console.log("your chanals is kkkkk",chanalCount)
    // Return the count as the response
    res.json({ count: chanalCount });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: 'Internal server error' });
  }
});
module.exports = router;