var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.send("Welcome");
});

app.listen(port);