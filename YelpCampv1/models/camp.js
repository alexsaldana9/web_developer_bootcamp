const mongoose = require('mongoose');

// SCHEMA
var campSchema = new mongoose.Schema({
    name: String,
    price: Number,
    location: String,
    description: String,
    image: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Camp", campSchema);
