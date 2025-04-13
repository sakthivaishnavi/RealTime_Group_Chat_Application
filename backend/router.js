const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("server is on and running");
});

module.exports = router;