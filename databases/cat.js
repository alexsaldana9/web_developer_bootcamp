const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var misu =  new Cat({
    name: "Misu", 
    age: 19, 
    temperament: "nice"
});

misu.save(function(err, response){
    if(err){
        console.log("Something went wrong!!");
    } else {
        console.log("Saved cat to DB");
        console.log(response);
    }
});

// New and save 
Cat.create({
    name: "Susi",
    age: 12,
    temperament: "good"
}, function(err, response){
    if(err){
        console.log("ERROR!!");
        console.log(err);
    } else {
        console.log("New cat");
        console.log(response);
    }
});


// Find all cats
Cat.find({}, function(err, response){
    if(err){
        console.log("ERROR!!");
        console.log(err);
    }else {
        console.log("All of the cats");
        console.log(response);
    }
})

