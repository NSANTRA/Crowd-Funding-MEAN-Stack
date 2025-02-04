const express = require('express');
const router = express.Router();

// Home Page Route
router.get('/startcampaign', (req, res) => {
    res.render("StartCampaign", { message: null });
});

router.get('/donate', (req, res) => {
    res.render("Donate", { message: null });
});

router.get('/browse', (req, res) => {
    res.render("Browse", { message: null });
});

module.exports = router;