const express = require('express');
const router = express.Router();
const apiController = require('../Controller/apiController');

// API Route
router.get('/', apiController.apihomeget);

module.exports = router;