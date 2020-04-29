var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});

app.get("/", function(req, res){
    //res.send("<h1>HOLA</h1>");
    res.render("home");
});

app.get("/love/:animal", function(req, res){
		var animal = req.params.animal.toLowerCase();
		console.log("animal = " + animal);

    //res.send("You love " + animal);
    res.render("love", {animalVar : animal});
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
	res.render("speak", {animalVar : animal, soundVar : sound});
});

app.get("/post", function(req, res){
	var posts = [
		{title: "Post 1", author: "john"},
		{title: "Post 2", author: "johnny"},
		{title: "Post 3", author: "jane"}
	];
	res.render("posts", {posts: posts});
});

app.get("*", function(req, res){
    //res.send("<h1>HOLA</h1>");
    res.render("notfound");
});