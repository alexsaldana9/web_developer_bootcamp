var express = require("express");

var app = express();

var listener = app.listen(8889, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.get("/", function(req, res){
    res.send("Hi there, welcome to the assignment");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    console.log("animal= " + animal);
    //pig, cow, dog

    if (animal == "pig"){
    	console.log("The pig says 'Oink'");
    	res.send("The pig says 'Oink'");
    } else if (animal == "cow") {
    	res.send("The cow says 'Mooo'");
    } else if (animal == "dog") {
    	res.send("The dog says 'Woof woof'");
    } else {
    	res.send("Not in the animal list");
    }
});

app.get("/repeat/:word/:num", function(req, res){
		var word = req.params.word;
		console.log("word= " + word);

    var num = Number(req.params.num);
    console.log("num= " + num);

    var sentence = "";
    for (var i=0; i < num; i++){
    	console.log("i = "+ i);
    	sentence = sentence + " "+ word;
    }

    console.log("Print sentence = " + sentence);		
    res.send("Print sentence = " + sentence);
});

app.get("*", function(req, res){
    res.send("Not match, but it is ok");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});