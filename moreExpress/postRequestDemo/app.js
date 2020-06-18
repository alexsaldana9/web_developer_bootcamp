var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

var friends = ["Ale", "John", "Lisa", "Lila"];

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});



app.get("/", function(req, res){
    res.render("home.ejs");
});


app.get("/friend", function(req, res){

    res.render("friends", {friends: friends});
});


app.get("/car", function(req, res){

    var cars = ["toyota", "honda", "jeep", "ford"];

    res.render("cars", {cars: cars});
});


app.get("/post", function(req, res){
    var posts = ["post1", "post2", "post3"];
    
	res.render("posts", {posts: posts});
});


app.post("/addfriend", function(req, res){
    console.log(req.body);
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friend");
});


app.get("/test", function(req, res){

    res.render("test.ejs");
});

app.get("*", function(req, res){
    //res.send("<h1>HOLA</h1>");
    res.render("notfound");
});