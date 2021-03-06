var express = require("express");
const { findOneAndUpdate } = require("../models/camp");
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
    res.render("campgrounds/new.ejs", {currentUser: req.user});
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


router.post("/campgrounds", isLoggedIn, function(req, res) {
    // add data from form
    // redirect to campgrounds

    var name = req.body.name;
    var image = req.body.image;
    var location = req.body.location;
    var author = {
        id: req.user._id,
        username: req.user.username
    }

    var newCampground = {name: name, image: image, location: location, author: author};

    Camp.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });    
});


// Edit - contains form
router.get("/campgrounds/:id/edit", checkCampgroundOwnership, function(req, res) {
    Camp.findById(req.params.id, function(err,foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});


// Update -  where the form submits to
router.put("/campgrounds/:id", checkCampgroundOwnership, function(req, res) {
    Camp.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        console.log("updatedCampground === ############## "+ updatedCampground);
        if(err){
            res.redirect("/campgrounds");
        } else {
            //console.log("name change: " + req.params.camp.name );
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


// Destroy 
router.delete("/campgrounds/:id", checkCampgroundOwnership, function(req, res){
    Camp.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
            res.redirect("/campgrounds");
        }
        res.redirect("/campgrounds");
    }); 
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

// check user is the author of the campground
function checkCampgroundOwnership(req, res, next) {
    // is user logged in
    if(req.isAuthenticated()) {
        Camp.findById(req.params.id, function(err,foundCampground){
            if(err) {
                res.redirect("/campgrounds");
            } else {
                // if the user owns the campground
                console.log("foundCampground ---- " + foundCampground);
                if(foundCampground.author.id.equals(req.user._id)) {
                    //res.render("campgrounds/edit", {campground: foundCampground});
                    next();
                } else {
                    //res.send("You do not have permission to edit");
                    res.redirect("back");
                }
            }
        });
    } else {
        console.log("you need to log in");
        res.redirect("/login");
    }
}

module.exports = router;