// Necessary Imports 
const express = require('express')
const dbConnection = require('./backend/dbConfig/dbconn')

require('dotenv').config()

dbConnection()

const app = express()
const routes = express.Router()

// To read the data coming from the user Side
app.use(express.json())



// Basic Function for Running the Server With the specified Port in DotEnv File
app.listen(process.env.PORT, ()=>{
    console.log(`Running on: http://localhost:${process.env.PORT}`)
})