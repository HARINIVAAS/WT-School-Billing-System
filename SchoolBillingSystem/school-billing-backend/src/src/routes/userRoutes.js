const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/login', async (req, res) => {
    const { username, rollno, email, password } = req.body;

    try {
        const newUser = new User({ username, rollno, email, password });
        await newUser.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error creating user', error });
    }
});

module.exports = router;
