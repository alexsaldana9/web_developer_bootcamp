var express =  require("express");
var mongoose = require('mongoose');
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose =  require("passport-local-mongoose");

var User = require("./models/user");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1/authentication', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(require("express-session")({
    secret: "PNW",
    resave: false,
    saveUninitialized: false
}));

// ---- Authentication --------
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// -----------


// ROUTES ===================
app.get("/", function(req,res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});
//  ===================

// Auth routes ----------------------
app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});
// ---------------------------

// Login routes ***************
app.get("/login", function(req, res) {
    res.render("login");
});

//middleware 
app.post("/login", passport.authenticate("local", {
        successRedirect: "/secret",
        failureRedirect: "/login"
}) , function(req, res){

});
//  *****************************

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/")
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
};

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("The AUTH Server has started");
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});