// Importing Required Modules
const express = require('express');
const dbConfig = require('../db/config');
const userAuth = require('../routes/authRoutes')
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const cors = require('cors')


// Configuring Environment Variables
dotenv.config();

// Initializing Express App and .env
const app = express();
const PORT = process.env.PORT;

// For Postman Testing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// For integration
app.use(cors())

// Routes
app.use('/api/authUser', userAuth);

// app.use(bodyParser.urlencoded({ extended: true }));

// Listening on PORT
app.listen(PORT, () => {
    // Connecting to MongoDB
    dbConfig();
    console.log(`Server is running on port http://localhost:${PORT}`);
});