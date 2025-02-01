const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    First_Name: {
        type: String,
        required: true,
    },

    Last_Name: {
        type: String,
        required: true,
    },

    Username: {
        type: String,
        required: true,
    },

    Email: {
        type: String,
        required: true,
    },

    Password: {
        type: String,
        required: true,
    },

    Date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', userSchema);