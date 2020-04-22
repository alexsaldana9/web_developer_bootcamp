var express = require("express");
var app = express();

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});

app.get("/", function(req, res){
    //res.send("<h1>HOLA</h1>");
    res.render("home.ejs");

});

app.get("/love/:animal", function(req, res){
		var animal = req.params.animal.toLowerCase();
		console.log("animal = " + animal);

    //res.send("You love " + animal);
    res.render("love.ejs", {animalVar : animal});
});