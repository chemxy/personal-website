const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/js'));
//Store all JS and CSS in js folder.


app.listen(process.env.port || 3000);

console.log('Running at Port 3000');