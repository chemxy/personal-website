const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.set('view engine', 'html');

app.use(express.static(__dirname));
//Store all HTML files in view folder.
//app.use(express.static(__dirname + '/js'));
//Store all JS and CSS in js folder.

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');

});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/view/index.html');

});

app.get('/resume.html', function(req, res) {
    res.sendFile(__dirname + '/view/resume.html');

});

app.get('/contact.html', function(req, res) {
    res.sendFile(__dirname + '/view/contact.html');

});

app.get('/projects.html', function(req, res) {
    res.sendFile(__dirname + '/view/projects.html');

});

app.get('/contact.html/form-submitted', function(req, res) {
    res.send("form submitted!");

});


app.listen(process.env.port || 3000);

console.log('Running at Port 3000');