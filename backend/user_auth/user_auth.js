const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const router = express.Router();

// createTables();
// User Registration
const secretKey = crypto.randomBytes(64).toString('hex');

router.post('/api/register', async (req, res) => {
  try {
    const { username, phone_number, email, password } = req.body;

    // Check if the user already exists in the database
    const checkUserQuery = 'SELECT * FROM users_auth WHERE email = $1;';
    const checkUserResult = await prisma.query(checkUserQuery, [email]);

    if (checkUserResult.rows.length > 0) {
      return res.status(409).json({ error: 'User already exists.' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    const insertUserQuery =
      'INSERT INTO users_auth (username, phone_numer, email, password) VALUES ($1, $2, $3, $4) RETURNING id;';
    const insertUserValues = [username, phone_number, email, hashedPassword];
    const insertUserResult = await prisma.query(insertUserQuery, insertUserValues);

    const userId = insertUserResult.rows[0].id;
    // console.log(userId)
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering the user.' });
  }
});

// User Login
router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user exists in the database
    const checkUserQuery = 'SELECT * FROM users_auth WHERE email = $1;';
    const checkUserResult = await prisma.query(checkUserQuery, [email]);

    if (checkUserResult.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const user = checkUserResult.rows[0];

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user.id }, secretKey);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'An error occurred while logging in.' });
  }
});

module.exports = router;