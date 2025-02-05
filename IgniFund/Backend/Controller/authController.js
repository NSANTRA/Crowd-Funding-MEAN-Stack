const User = require('../Models/Users');
const bcrypt = require('bcrypt');

const signupget = (req, res) => {
    res.render('Signup', { message: null });
};

const signuppost = async (req, res) => {
    try {
        const { First_Name, Last_Name, Username, Email, Password } = req.body;

        // Log the received data
        console.log('Received Data:', req.body);

        if (!First_Name || !Last_Name || !Username || !Email || !Password) {
            return res.render('Signup', { message: "Please provide all the required fields!" });
        }

        let user = await User.findOne({ Username });

        if (user) {
            return res.render('Signup', { message: "Username already exists!" });
        }

        else {
            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(Password, 10);
            
            // Create a new user document with the provided data
            const newUser = new User({ First_Name, Last_Name, Username, Email, Password: hashedPassword });
            await newUser.save();
    
            return res.render('Signup', { message: "Registration successful! You can now log in." });
        }

    } catch (error) {
        return res.render('Signup', { message: "An error occurred. Please try again later." });
    }
};

const signinget = (req, res) => {
    res.render('Signin', { message: null });
};

const signinpost = async (req, res) => {
    try {
        const { EmailorUsername, Password } = req.body;

        // Log the received data
        console.log('Received Data:', req.body);
        
        if (!EmailorUsername || !Password) {
            return res.render('Signin', { message: "Please provide all the required fields!" });
        }
        
        // Find the user with the provided email
        const user = await User.findOne({ $or: [{Email: EmailorUsername}, {Username: EmailorUsername}] });
        
        // Check if the user exists
        if (!user) {
            return res.render('Signin', { message: "User not found!" });
        }
        
        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(Password, user.Password);
        
        // Check if the password is correct
        if (!isMatch) {
            return res.render('Signin', { message: "Invalid Password!" });
        }
    
        return res.render('Home', { fname: user.First_Name, lname: user.Last_Name });
    } catch (error) {
        return res.render('Signin', { message: "An error occurred!" });
    }
};

module.exports = {signupget, signuppost, signinget, signinpost};