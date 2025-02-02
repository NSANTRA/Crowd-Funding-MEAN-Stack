const express = require('express');
const path = require('path');
const User = require('../Models/Users');
const router = express.Router();
const bcrypt = require('bcrypt');

// Home Route (Signup Page)
router.get('/signup', (req, res) => {
    // res.sendFile(path.join(__dirname, '../Pages', 'Signup.html'));
    res.render('Signup', { message: null });
});

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { First_Name, Last_Name, Username, Email, Password } = req.body;
        
        // Log the received data
        console.log('Received Data:', req.body);

        let user = await User.findOne({ Username });

        if (user) {
            return res.render('Signup', { message: "Username already exists!" });
        }
        
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(Password, 10);
        
        // Create a new user document with the provided data
        const newUser = new User({ First_Name, Last_Name, Username, Email, Password: hashedPassword });
        await newUser.save();

        return res.render('Signup', { message: "Registration successful! You can now log in." });
    } catch (error) {
        console.log(error);
        res.render('Signup', { message: "An error occurred. Please try again later." });
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
        
        // Find the user with the provided email
        const user = await User.findOne({ Email });
        
        // Check if the user exists
        if (!user) {
            // return res.status(404).send('User not found!');
            return res.render('Signin', { message: "User not found!" });
        }
        
        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        
        // Check if the password is correct
        if (!isMatch) {
            // return res.status(400).send('Invalid Password!');
            return res.render('Signin', { message: "Invalid Password!" });
        }
        
        // Send the success page
        // res.sendFile(path.join(__dirname, '../Pages', 'Success.html'));
        return res.render('Welcome', { fname: user.First_Name, lname: user.Last_Name });
    } catch (error) {
        // Send the fail page
        console.log(error);
        res.sendFile(path.join(__dirname, '../Pages', 'Fail.html'));
    }
});

module.exports = router;