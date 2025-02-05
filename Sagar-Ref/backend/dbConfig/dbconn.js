const mongo = require('mongoose')
require('dotenv').config()

const dbconn = async() =>{
    try{
        await mongo.connect(process.env.MONGOURI)
        console.log(process.env.MONGOURI)
    }catch(err){
        console.log(err.message)
    }
}

module.exports = dbconn