var fs = require("fs"); //nodejs file server

var express = require('express');
var app = express();
var path = require('path');

//routing
var index = require('./routes/index');
app.use('/index', index);

var resume = require("./routes/resume");
app.use("/resume", resume);

var projects = require("./routes/projects");
app.use("/projects", projects);

var contact = require('./routes/contact');
app.use('/contact', contact);

//use static image source
app.use(express.static(__dirname + '/images'));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname + "/view/index.html"));
});

app.get('/contact.html/form-submitted', function (req, res) {
    console.log("form submitted");
    res.send("form submitted!");
});

var server = app.listen(3000, "10.0.0.253", function () {
    console.log('Running at Port 3000');
    console.log(server.address().address);
});

