//api  key - http://www.omdbapi.com/?i=tt3896198&apikey=8eaa1468

var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");


var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app started");
});

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){

    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?apikey=8eaa1468&s=' + query;
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});

            // var results = JSON.parse(body)
            // res.send(results["Search"][0]["Title"]);
        }
    });
});

app.get("/movies", function(req, res){
   // res.render("results");

    request('http://www.omdbapi.com/?apikey=8eaa1468&s=seattle', function(error, response, body){
        if(!error && response.statusCode === 200 ) {
            var parsedData = JSON.parse(body);

            //console.log("All data ===", parsedData);

            console.log(parsedData["Search"]);

            console.log("parsedData[Search] ==" + parsedData["Search"].length);

            for(var i = 0; i < parsedData["Search"].length; i++) {
                //var obj = parsedData["Search"][i];
            
                var titles = parsedData["Search"][i].Title;

                console.log("Print only the Title === " + titles );
            }
        } else {
            console.log("error =" , error);
            console.log("response =" , response.statusCode);
        }
    });
});