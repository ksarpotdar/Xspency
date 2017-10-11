var express = require("express");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/xspencyController.js");

app.use("/", routes);

app.use(function(err, req, res, next){
    res.status(400).json(err);
  });

app.listen(port);

module.exports = app;