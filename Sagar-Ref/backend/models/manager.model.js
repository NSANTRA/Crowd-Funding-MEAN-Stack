const mongo = require('mongoose')

const managerSchema = new mongo.Schema({
    managerId:{
        type: String,
        required:true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        default: "manager",
    },
})

module.exports = mongo.model('Manager', managerSchema)