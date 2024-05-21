const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
app.use(cors());

// Create an instance of the Prisma Client
const prisma = new PrismaClient();

// Other middleware and configurations

// Import the addChannel router
const addChannelRouter = require('./add_movie_cat_types/post_apis');
const fetchMovieRouter = require('./fetch_movie_channel/fetch_apis');
const updateMovieRouter = require('./update_data/update_');
const userAuthRouter = require('./user_auth/user_auth');

app.use(express.json());

// Use the addChannel router
app.use(addChannelRouter);
app.use(fetchMovieRouter);
app.use(updateMovieRouter);
app.use(userAuthRouter);

// Check the database connection
prisma.$connect()
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});