
async function createTables() {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE videos (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255),
          duration BIGINT,
          description TEXT,
          channelId INTEGER,
          typeId INTEGER,
          categoryId INTEGER,
          videoUrl VARCHAR(255)
        );
  
        CREATE TABLE channels (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255)
        );
  
        CREATE TABLE types (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255)
        );
  
        CREATE TABLE categories (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255)
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
    createTables,
  };