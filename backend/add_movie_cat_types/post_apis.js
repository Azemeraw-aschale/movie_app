const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();
const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const prisma = new PrismaClient();

cloudinary.config({ 
  cloud_name: 'azii', 
  api_key: '821493881388656', 
  api_secret: 'kf4HQKhl8eLoi4rWWRggYiM2HnE' 
});

// Multer upload configuration
const upload = multer({ dest: 'uploads/' });

router.post('/api/channels', upload.single('img'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    let cloudinaryResponse;
    if (req.file) {
      cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    }

    // Save channel in database
    const { name } = req.body;
    const imagePath = req.file ? req.file.filename : null; // Using multer file name for local storage
    
    const channel = await prisma.channels.create({
      data: {
        name,
        img: cloudinaryResponse ? cloudinaryResponse.secure_url : null, // Save Cloudinary URL
        // Optionally save local image path for local development
      },
    });

    res.status(200).json({ message: 'Channel inserted successfully', channel });
  } catch (error) {
    console.error('Error adding channel:', error);
    res.status(500).json({ error: 'An error occurred while adding the channel.' });
  }
});

module.exports = router;

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
    const { title, duration, description, channelId, typeId, categoryId, videourl } = req.body;
    // console.log("ppapapapapapa", req.body)

     console.log("ppapapapapapa", req.body)


    const movie = await prisma.movies.create({
      data: {
        title: title,
        duration: duration,
        description: description,
       
        channels: {
          connect: { id: channelId } // Connects the movie to an existing channel with ID 1
        },
        types: {
          connect: { id: typeId } // Connects the movie to an existing type with ID 1
        },
        categories: {
          connect: { id: categoryId} // Connects the movie to an existing category with ID 1
        },
        videourl:videourl,
        // dd:videoUrl
      }
   
    
    });
   

    res.status(200).json({ message: 'Movie inserted successfully', movie });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ error: 'An error occurred while adding the movie.' });
  }
});
module.exports = router;