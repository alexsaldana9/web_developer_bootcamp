var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
];

//var square1 = document.getElementById("1s");

var squares = document.querySelectorAll(".square");
var pickedColor = colors[2];
var colorDisplay = document.getElementById("colorDisplay");

var message = document.getElementById("displayMessage");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length ; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            displayMessage.textContent = "Correct";
        }else {
            this.style.backgroundColor = "black";
            displayMessage.textContent = "Try again!";
        }
    });
}

// $("#1s").click(function(){
//     alert("sdklfjksdjfl");
//     square1.classList.add("done");
// });


