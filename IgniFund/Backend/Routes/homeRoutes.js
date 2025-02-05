const express = require('express');
const router = express.Router();
const homeController = require('../Controller/homeController');

// Home Page Route
router.get('/startcampaign', homeController.startcampaignget);

router.get('/donate', homeController.donateget);

router.get('/browse', homeController.browseget);

module.exports = router;