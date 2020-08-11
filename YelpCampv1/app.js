var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA
var campSchema = new mongoose.Schema({
    name: String,
    price: Number,
    location: String
});

var Camp = mongoose.model("Camp", campSchema);

var campsite =  new Camp({
    name: "Yosemite", 
    price: 20, 
    location: "California"
});

campsite.save(function(err, response){
    if(err){
        console.log("Something went wrong!!");
    } else {
        console.log("Saved campsite to DB");
        console.log(response);
    }
});

// New and save 
Camp.create({
    name: "Everglades",
    price: 12,
    location: "Flamingo"
}, function(err, response){
    if(err){
        console.log("ERROR!!");
        console.log(err);
    } else {
        console.log("New campsite");
        console.log(response);
    }
});


// Find all Camps
Camp.find({}, function(err, response){
    if(err){
        console.log("ERROR!!");
        console.log(err);
    }else {
        console.log("All of the camps");
        console.log(response);
    }
})
// 



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