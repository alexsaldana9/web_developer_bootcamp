var express = require("express");
var router = express.Router();
var Camp =  require("../models/camp");
var Comment =  require("../models/comment");

// var campsite =  new Camp({
//     name: "Yosemite", 
//     price: 20, 
//     location: "California",
//     description: "primitive camping",
//     image: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/56CD3D55-E4EF-1B16-0DBD63EB2F5193A4.jpg?width=307&quality=90&mode=crop"
// });

// campsite.save(function(err, response){
//     if(err){
//         console.log("Something went wrong!!");
//     } else {
//         console.log("Saved campsite to DB");
//         console.log(response);
//     }
// });

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



router.get("/campgrounds/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new.ejs")
});

router.get("/campgrounds/:id", function(req, res) {
    Camp.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            console.log("foundCampground  = " + foundCampground);   
            res.render("campgrounds/show", {camp: foundCampground})
        }
    });
});

router.get("/campgrounds", function(req, res) {
    Camp.find({}, function(err, response){
        if(err){
            console.log("ERROR!!");
            console.log(err);
        }else {
            console.log("All of the camps");
            console.log(response);
            res.render("campgrounds/index", {campgrounds: response, currentUser: req.user});
        }
    })   
});


router.post("/campgrounds", function(req, res) {
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

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;