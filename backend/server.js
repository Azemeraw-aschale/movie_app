const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// createTables();
// Other middleware and configurations
// Import the addChannel router
const addChannelRouter = require('./add_movie_cat_types/post_apis');
const fetchMovieRouter = require('./fetch_movie_channel/fetch_apis');
const updateMovieRouter = require('./update_data/update_');
const userAuthRouter = require('./user_auth/user_auth');


// Use the addChannel router
app.use(addChannelRouter);
app.use(fetchMovieRouter);
app.use(updateMovieRouter);
app.use(userAuthRouter);

// Start the server
app.listen(8080, async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
  console.log('Server is running on port 8080');
});