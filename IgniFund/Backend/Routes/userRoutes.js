const express = require('express');
const path = require('path');
const User = require('../Models/Users');
const router = express.Router();
const bcrypt = require('bcrypt');

// Home Route (Signup Page)
router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../Pages', 'Signup.html'));
});

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { First_Name, Last_Name, Username, Email, Password } = req.body;
        
        // Log the received data
        console.log('Received Data:', req.body);
        
        // Check if any required field is missing
        if (!First_Name || !Last_Name || !Username || !Email || !Password) {
            console.error('Missing Fields:', req.body);
            return res.status(400).send('All fields are required!');
        }
        
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(Password, 10);
        
        // Create a new user document with the provided data
        const newUser = new User({ First_Name, Last_Name, Username, Email, Password: hashedPassword });
        await newUser.save();

        // Send the success page
        res.sendFile(path.join(__dirname, '../Pages', 'Success.html'));
    } catch (error) {
        // Send the fail page
        console.log(error);
        res.sendFile(path.join(__dirname, '../Pages', 'Fail.html'));
    }
});

// Home Route (Signin Page)
router.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '../Pages', 'Signin.html'));
});

// Signin Route
router.post("/signin", async (req, res) => {
    try {
        const { Email, Password } = req.body;
        
        // Log the received data
        console.log('Received Data:', req.body);
        
        // Check if any required field is missing
        if (!Email || !Password) {
            console.error('Missing Fields:', req.body);
            return res.status(400).send('All fields are required!');
        }
        
        // Find the user with the provided email
        const user = await User.findOne({ Email });
        
        // Check if the user exists
        if (!user) {
            console.error('User Not Found:', req.body);
            return res.status(404).send('User not found!');
        }
        
        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        
        // Check if the password is correct
        if (!isMatch) {
            console.error('Invalid Password:', req.body);
            return res.status(400).send('Invalid Password!');
        }
        
        // Send the success page
        res.sendFile(path.join(__dirname, '../Pages', 'Success.html'));
    } catch (error) {
        // Send the fail page
        console.log(error);
        res.sendFile(path.join(__dirname, '../Pages', 'Fail.html'));
    }
});

module.exports = router;