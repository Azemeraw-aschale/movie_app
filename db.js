const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // Default PostgreSQL port
});

async function createTables() {
  const client = await pool.connect();
  try {
    await client.query(`
    CREATE TABLE IF NOT EXISTS movies (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        duration INTERVAL NOT NULL,
        description TEXT,
        channelId INTEGER REFERENCES channels(id),
        typeId INTEGER REFERENCES types(id),
        categoryId INTEGER REFERENCES categories(id),
        videoUrl VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS channels (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS types (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
      );

      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255)
      );
      CREATE TABLE IF NOT EXISTS users_auth (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255),
        phone_numer VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
      );
      CREATE TABLE IF NOT EXISTS azi (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255),
        email VARCHAR(255)
        
      );
    `);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables', error);
  } finally {
    client.release();
  }
}

module.exports = {
  pool,
  createTables,
};