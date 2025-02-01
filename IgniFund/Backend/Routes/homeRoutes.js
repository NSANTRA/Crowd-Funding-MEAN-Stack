const express = require('express');
const path = require('path');
const router = express.Router();

// Home Route
router.get('/ ', (req, res) => {
    res.sendFile(path.join(__dirname, '../Pages', 'Index.html'));
});

module.exports = router;