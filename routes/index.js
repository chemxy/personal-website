const fs = require("fs"); //nodejs file server

const express = require('express');
const router = express.Router();

var path = require('path');

router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../view/index.html'));
});


module.exports = router;