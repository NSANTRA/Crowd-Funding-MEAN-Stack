const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../Pages', 'Index.html'));
    res.render("Home", { message: null });
});

module.exports = router;