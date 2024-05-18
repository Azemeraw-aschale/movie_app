const express = require('express');
// const { pool} = require('./db');
const { pool } = require('./db'); 
const app = express();
// createTables();
// Other middleware and configurations
// Import the addChannel router
const addChannelRouter = require('./add_movie_cat_types/post_apis');
const fetchMovieRouter= require('./fetch_movie_channel/fetch_apis');
const updateMovieRouter=require('./update_data/update_');
const userAuthRouter=require('./user_auth/user_auth');

app.use(express.json());

// Use the addChannel router
app.use(addChannelRouter);
app.use(fetchMovieRouter);
app.use(updateMovieRouter);
app.use(userAuthRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});