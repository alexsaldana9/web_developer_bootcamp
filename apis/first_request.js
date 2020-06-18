var request = require('request');

// request('http://www.reddit.com', function(error, response, body){
//     if(error){
//         console.log("Something went wrong!");
//         console.log(error);
//     } else {
//         if(response.statusCode === 200) {
//             // it works
//             console.log(body);
//         }
//     }

// });


request('http://dummy.restapiexample.com/api/v1/employees', function(error, response, body){
    if(!error && response.statusCode === 200 ) {
        var parsedData = JSON.parse(body);

        //console.log("All data ===", parsedData);

        //console.log(parsedData["data"]);

        console.log("parsedData[data] ==" + parsedData["data"].length);
        for(var i = 0; i < parsedData["data"].length; i++) {
            var obj = parsedData["data"][i];
        
            var names = parsedData["data"][i].employee_name;

            console.log("Print only the names === " + names );
        }
    }
});