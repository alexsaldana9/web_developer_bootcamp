var mongoose = require('mongoose');
var Camp =  require("./models/camp");
var Comment = require("./models/comment");


var data = [
    {
        name: "Yosemite camp",
        image: "https://tse3.mm.bing.net/th?id=OIP.SPq76jtfQjmEtlQ77QKcJgHaDt&pid=Api",
        description: "Best view"
    },
    {
        name: "Olympic camp",
        image: "https://tse4.mm.bing.net/th?id=OIP.2g3ZAHWp98bAuI0vEypsBQHaE7&pid=Api",
        description: "Forest"
    },
    {
        name: "Denali camp",
        image: "https://tse1.mm.bing.net/th?id=OIP.bV-V_hRmD_cnb3zcrDdcRQHaFj&pid=Api",
        description: "SNOW"
    }
]


function seedDB() {
    Camp.remove({},  function(err){
            if(err) {
                console.log(err);
            }
            console.log("removed Camps!!");

            // data.forEach(function(seed){
            //     Camp.create(seed, function(err, camp){
            //         if(err) {
            //             console.log(err);
            //         } else {
            //             console.log("added camp");

            //             Comment.create(
            //                 {
            //                     text: "Nice ",
            //                     author: "Leia"
            //                 }, function(err, comment){
            //                     if(err){
            //                         console.log(err);
            //                     } else {
            //                         camp.comments.push(comment);
            //                         camp.save();
            //                         console.log("created a new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
    });
    
}
module.exports = seedDB;