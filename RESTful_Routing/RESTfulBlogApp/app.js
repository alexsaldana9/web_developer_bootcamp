var express = require("express"),
app = express();
bodyParser = require("body-parser"),
mongoose = require("mongoose");

// App config
mongoose.connect('mongodb://127.0.0.1/restful_blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Monggose / Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

// this is sample data
// Blog.create({
//     title: "First Blog - Test",
//     image: "https://images.unsplash.com/photo-1573475902271-084338af4ca4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     body: "This is the sample of the body text"
// });

// Routes
app.get("/blogs", function(req, res){
    res.render("index");
})


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("The Blogs App Server has started");
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server is running");
//     console.log(`App listening on port ${PORT}`);
// })