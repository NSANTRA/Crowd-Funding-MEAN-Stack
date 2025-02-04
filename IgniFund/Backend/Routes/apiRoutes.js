const express = require('express');
const router = express.Router();

// API Route
router.get('/', (req, res) => {
    res.render("API Home", { message: null });
});

module.exports = router;