const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const router = express.Router();

// createTables();


router.put('/api/movies/:id', async (req, res) => {
    try {
      const movieId = req.params.id;
      const { title, duration, description, channelId, typeId, categoryId, videoUrl } = req.body;
  
      // Check if the movie exists
      const checkMovieQuery = 'SELECT * FROM movies WHERE id = $1;';
      const checkMovieResult = await prisma.query(checkMovieQuery, [movieId]);
  
      if (checkMovieResult.rows.length === 0) {
        return res.status(404).json({ error: 'Movie not found.' });
      }
  
      let channelName = null;
      let typeName = null;
      let categoryName = null;
  
      // Check if channelId is provided and exists in the channels table
      if (channelId) {
        const channelQuery = 'SELECT * FROM channels WHERE id = $1;';
        const channelResult = await prisma.query(channelQuery, [channelId]);
  
        if (channelResult.rows.length > 0) {
          channelName = channelResult.rows[0].name;
        }
      }
  
      // Check if typeId is provided and exists in the types table
      if (typeId) {
        const typeQuery = 'SELECT * FROM types WHERE id = $1;';
        const typeResult = await prisma.query(typeQuery, [typeId]);
  
        if (typeResult.rows.length > 0) {
          typeName = typeResult.rows[0].name;
        }
      }
  
      // Check if categoryId is provided and exists in the categories table
      if (categoryId) {
        const categoryQuery = 'SELECT * FROM categories WHERE id = $1;';
        const categoryResult = await prisma.query(categoryQuery, [categoryId]);
  
        if (categoryResult.rows.length > 0) {
          categoryName = categoryResult.rows[0].name;
        }
      }
  
      const updateQuery = 'UPDATE movies SET title = $1, duration = $2, description = $3, channelId = $4, typeId = $5, categoryId = $6, videoUrl = $7 WHERE id = $8;';
      const updateValues = [title, duration, description, channelId, typeId, categoryId, videoUrl, movieId];
      await prisma.query(updateQuery, updateValues);
  
      const updatedMovie = {
        id: movieId,
        title,
        duration,
        description,
        channelId,
        typeId,
        categoryId,
        videoUrl,
        channelName,
        typeName,
        categoryName
      };
  
      res.status(200).json({ message: 'Movie updated successfully', movie: updatedMovie });
    } catch (error) {
      console.error('Error updating movie:', error);
      res.status(500).json({ error: 'An error occurred while updating the movie.' });
    }
  });
  
  router.put('/api/channels/:id', async (req, res) => {
    try {
      const channelId = req.params.id;
      const { name, description } = req.body;
  
      // Check if the channel exists
      const checkChannelQuery = 'SELECT * FROM channels WHERE id = $1;';
      const checkChannelResult = await prisma.query(checkChannelQuery, [channelId]);
  
      if (checkChannelResult.rows.length === 0) {
        return res.status(404).json({ error: 'Channel not found.' });
      }
  
      const updateQuery = 'UPDATE channels SET name = $1, description = $2 WHERE id = $3;';
      const updateValues = [name, description, channelId];
      await prisma.query(updateQuery, updateValues);
  
      const updatedChannel = {
        id: channelId,
        name,
        description
      };
  
      res.status(200).json({ message: 'Channel updated successfully', channel: updatedChannel });
    } catch (error) {
      console.error('Error updating channel:', error);
      res.status(500).json({ error: 'An error occurred while updating the channel.' });
    }
  });
  router.delete('/api/movies/:id', async (req, res) => {
    try {
      const mov_Id = req.params.id;
   console.log(mov_Id)
      // Check if the channel exists
      // const checkChannelQuery = 'SELECT * FROM channels WHERE id = $1;';
      const checkChannelQuery = await prisma.movies.findMany({
        where: {
          id: parseInt(mov_Id) // Convert the channelId to an integer
        }
      });
      if (checkChannelQuery.length === 0) {
        return res.status(404).json({ error: 'movie not found.' });
      }
  
      await prisma.movies.delete({
        where: {
          id: parseInt(mov_Id) // Convert the channelId to an integer
        }
      });
  
      res.status(200).json({ message: 'program deleted successfully' });
    } catch (error) {
      console.error('Error deleting program:', error);
      res.status(500).json({ error: 'An error occurred while deleting the program.' });
    }
  });
  
  router.delete('/api/channels/:id', async (req, res) => {
    try {
      const channelId = req.params.id;
   console.log(channelId)
      // Check if the channel exists
      // const checkChannelQuery = 'SELECT * FROM channels WHERE id = $1;';
      const checkChannelQuery = await prisma.channels.findMany({
        where: {
          id: parseInt(channelId) // Convert the channelId to an integer
        }
      });
      if (checkChannelQuery.length === 0) {
        return res.status(404).json({ error: 'Channel not found.' });
      }
  
      await prisma.channels.delete({
        where: {
          id: parseInt(channelId) // Convert the channelId to an integer
        }
      });
  
      res.status(200).json({ message: 'Channel deleted successfully' });
    } catch (error) {
      console.error('Error deleting channel:', error);
      res.status(500).json({ error: 'An error occurred while deleting the channel.' });
    }
  });
  module.exports = router;