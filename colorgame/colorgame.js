var colors = generateRandomColors(6);

//var square1 = document.getElementById("1s");

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var colorDisplay = document.getElementById("colorDisplay");

var message = document.getElementById("displayMessage");


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length ; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            displayMessage.textContent = "Correct";
            changeColors(clickedColor);
        }else {
            this.style.backgroundColor = "black";
            displayMessage.textContent = "Try again!";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    console.log("rgb(" + red + ", "+ green + ", "+ blue + ")");

    return "rgb(" + red + ", "+ green + ", "+ blue + ")";
}

function generateRandomColors(num) {
    var array = [];

    for (var i = 0; i < num ; i++){
        array.push(randomColor());
    }

    return array;
}

function pickColor(arrayofColors){

    var number = arrayofColors.length - 1;

    var randomPickColor = Math.floor(Math.random() * number);
   
    return arrayofColors[randomPickColor];

}