const express = require('express');
const { pool} = require('../db'); 

const router = express.Router();

// createTables();

// Add a new category
router.post('/api/categories', async (req, res) => {
  try {
    const { name } = req.body;
    const query = 'INSERT INTO categories (name) VALUES ($1) RETURNING *;';
    const values = [name];

    const result = await pool.query(query, values);

    res.status(200).json({ message: 'Category inserted successfully', category: result.rows[0] });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'An error occurred while adding the category.' });
  }
});

// Add a new type
router.post('/api/types', async (req, res) => {
  try {
    const { name } = req.body;
    const query = 'INSERT INTO types (name) VALUES ($1) RETURNING *;';
    const values = [name];

    const result = await pool.query(query, values);

    res.status(200).json({ message: 'Type inserted successfully', type: result.rows[0] });
  } catch (error) {
    console.error('Error adding type:', error);
    res.status(500).json({ error: 'An error occurred while adding the type.' });
  }
});

// Add a new movie
router.post('/api/movies', async (req, res) => {
  try {
    const { title, duration, description, channelId, typeId, categoryId, videoUrl } = req.body;

    let channelName = null;
    let typeName = null;
    let categoryName = null;

    // Check if channelId is provided and exists in the channels table
    if (channelId) {
      const channelQuery = 'SELECT * FROM channels WHERE id = $1;';
      const channelResult = await pool.query(channelQuery, [channelId]);

      if (channelResult.rows.length > 0) {
        channelName = channelResult.rows[0].name;
      }
    }

    // Check if typeId is provided and exists in the types table
    if (typeId) {
      const typeQuery = 'SELECT * FROM types WHERE id = $1;';
      const typeResult = await pool.query(typeQuery, [typeId]);

      if (typeResult.rows.length > 0) {
        typeName = typeResult.rows[0].name;
      }
    }

    // Check if categoryId is provided and exists in the categories table
    if (categoryId) {
      const categoryQuery = 'SELECT * FROM categories WHERE id = $1;';
      const categoryResult = await pool.query(categoryQuery, [categoryId]);

      if (categoryResult.rows.length > 0) {
        categoryName = categoryResult.rows[0].name;
      }
    }

    const query = 'INSERT INTO movies (title, duration, description, channelId, typeId, categoryId, videoUrl) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;';
    const values = [title, duration, description, channelId, typeId, categoryId, videoUrl];

    const result = await pool.query(query, values);

    const insertedMovie = result.rows[0];
    insertedMovie.channelName = channelName;
    insertedMovie.typeName = typeName;
    insertedMovie.categoryName = categoryName;

    res.status(200).json({ message: 'Movie inserted successfully', movie: insertedMovie });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ error: 'An error occurred while adding the movie.' });
  }

});

module.exports = router;