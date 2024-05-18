const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Add a new category
router.post('/api/categories', async (req, res) => {
  try {
    const { name } = req.body;

    const category = await prisma.categories.create({
      data: {
        name,
      },
    });

    res.status(200).json({ message: 'Category inserted successfully', category });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'An error occurred while adding the category.' });
  }
});

// Add a new type
router.post('/api/types', async (req, res) => {
  try {
    const { name } = req.body;

    const type = await prisma.types.create({
      data: {
        name,
      },
    });

    res.status(200).json({ message: 'Type inserted successfully', type });
  } catch (error) {
    console.error('Error adding type:', error);
    res.status(500).json({ error: 'An error occurred while adding the type.' });
  }
});

// Add a new movie
router.post('/api/movies', async (req, res) => {
  try {
    const { title, duration, description, channelId, typeId, categoryId, videoUrl } = req.body;

    const movie = await prisma.movies.create({
      data: {
        title,
        duration,
        description,
        channelId,
        typeId,
        categoryId,
        videoUrl,
      },
      include: {
        channels: true,
        types: true,
        categories: true,
      },
    });

    res.status(200).json({ message: 'Movie inserted successfully', movie });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ error: 'An error occurred while adding the movie.' });
  }
});

module.exports = router;