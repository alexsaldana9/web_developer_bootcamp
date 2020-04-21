var express = require("express");

var app = express();

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.get("/", function(req, res){
    res.send("HEllo!!!");
});

app.get("/dog", function(req, res){
    res.send("DOg = woof");
});

app.get("/cat", function(req, res){
    res.send("cat = meow");
    console.log("Sent request!!!");
});

app.get("/r/:subreddit", function(req, res){
    res.send("this will be a subreddit @@@@");
    var subreddit = req.params.subreddit;
    console.log("Welcome to the " + subreddit + " Subreddit");
});


app.get("*", function(req, res){
    res.send("Not match, but it is ok");
    console.log("Sent request!!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});
