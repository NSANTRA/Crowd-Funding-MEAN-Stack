const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

// Home Route (Signup Page)
router.get('/signup', authController.signupget)

// Signup Route
router.post('/signup', authController.signuppost);

// Home Route (Signin Page)
router.get('/signin', authController.signinget);

// Signin Route
router.post("/signin", authController.signinpost);

module.exports = router;