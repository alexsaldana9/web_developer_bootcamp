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

app.get("/repeat/:word/:number", function(req, res){
		var word = req.params.word.toLowerCase();
		var num = req.params.number;

		var string = "";

		for (var i = 0; i < num; i++){
			string =string + " "+  word;
			//console.log("string  inside loop==", string);
		}
		//console.log("output outside loop= ", string);
    res.send(string);
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	if(animal === "pig"){
		var sound = "Oink";
	} else if(animal === "cow"){
		var sound = "Mooo";
	}else if(animal === "dog"){
		var sound = "Woof woof";
	} else {
		var sound = "not found";
	}
	res.render("speak.ejs", {animalVar : animal, soundVar : sound});
});


app.get("*", function(req, res){
    //res.send("<h1>HOLA</h1>");
    res.render("notfound.ejs");
});