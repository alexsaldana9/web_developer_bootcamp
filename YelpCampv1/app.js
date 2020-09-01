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
    location: String,
    description: String,
    image: String
});

var Camp = mongoose.model("Camp", campSchema);

var campsite =  new Camp({
    name: "Yosemite", 
    price: 20, 
    location: "California",
    description: "primitive camping",
    image: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/56CD3D55-E4EF-1B16-0DBD63EB2F5193A4.jpg?width=307&quality=90&mode=crop"
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
// Camp.create({
//     name: "Everglades",
//     price: 12,
//     location: "Flamingo"
// }, function(err, response){
//     if(err){
//         console.log("ERROR!!");
//         console.log(err);
//     } else {
//         console.log("New campsite");
//         console.log(response);
//     }
// });


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



// var campgrounds = [ 
//     { name: "Redwoods", image: "http://placecorgi.com/260/180" },
//     { name: "Redwoods creek", image: "http://placecorgi.com/260/180" },
//     { name: "Beach", image: "http://placecorgi.com/260/180" }
// ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs")
});

app.get("/campgrounds/:id", function(req, res) {
    Camp.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {camp: foundCampground})
        }
    });
});

app.get("/campgrounds", function(req, res) {
    Camp.find({}, function(err, response){
        if(err){
            console.log("ERROR!!");
            console.log(err);
        }else {
            console.log("All of the camps");
            console.log(response);
            res.render("index", {campgrounds: response});
        }
    })   
});


app.post("/campgrounds", function(req, res) {
    // add data from form
    // redirect to campgrounds

    var name = req.body.name;
    var image = req.body.image;
    var location = req.body.location;

    var newCampground = {name: name, image: image, location: location};

    Camp.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });    
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