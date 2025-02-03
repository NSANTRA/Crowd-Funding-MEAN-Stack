// Importing Required Modules
const express = require('express');
const dbConfig = require('../DBConfig/dbconfig');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const authRoutes = require('../Routes/authRoutes');
const homeRoutes = require('../Routes/homeRoutes');

// Connecting to MongoDB
dbConfig();

// Configuring Environment Variables
dotenv.config();

// Initializing Express App and .env
const app = express();
const PORT = process.env.PORT;

// Setting View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Views'));

// Application-Level Middlewares
app.use(express.static(path.join(__dirname, '../Assets')));
app.use(express.static(path.join(__dirname, '../Scripts')));
app.use(express.static(path.join(__dirname, '../Styles')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using Home Routes
app.use("/", homeRoutes);

// Using User Routes
app.use("/users", authRoutes);

// Listening on PORT
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});