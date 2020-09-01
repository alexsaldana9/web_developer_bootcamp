var express = require("express"),
methodOverride = require("method-override"),
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
app.use(methodOverride("_method"));

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
app.get("/", function(req, res){
    res.redirect("/blogs");
})

// Index
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error!!");
        } else {
            res.render("index", {blogs: blogs});
        }
    })
});

//New
app.get("/blogs/new", function(req, res) {
    res.render("new.ejs")
});

// Create 
app.post("/blogs", function(req, res) {
    Blog.create(req.body.blog, function(err, newBlog){
        if (err) {
            console.log("Error creating blog!");
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

// show by id
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// Edit
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// Update
app.put("/blogs/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, callback)
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