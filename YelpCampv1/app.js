var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [ 
    { name: "Redwoods", image: "http://placecorgi.com/260/180" },
    { name: "Redwoods creek", image: "http://placecorgi.com/260/180" },
    { name: "Beach", image: "http://placecorgi.com/260/180" }
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", {campgrounds: campgrounds});
});


app.post("/campgrounds", function(req, res) {
    // add data from form
    // redirect to campgrounds

    var name = req.body.name;
    var image = req.body.image;

    var newCampground = {name: name, image: image};

    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

    
});


app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs")
});
// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("The YelpCamp Server has started");
// });


//  Database  mongodb 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("The YelpCamp Server has started");
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});