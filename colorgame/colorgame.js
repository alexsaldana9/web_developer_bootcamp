var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("displayMessage");
var resetColorsButton = document.getElementById("newColorsBtn");

var colors = generateRandomColors(6);
var pickedColor = pickColor(colors);

console.log("pickedColor - line 10 =" + pickedColor);

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length ; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){

        console.log("CLICKED on a SQUARE");
        var clickedColor = this.style.backgroundColor;

        console.log("pickedColor - line 21 == ", pickedColor);
        console.log("clickedColor - line 22 ==== ", clickedColor);

        if(clickedColor === pickedColor){
            console.log("INSIDE IF@@@@@@");
            displayMessage.textContent = "Correct";
            changeColors(clickedColor);
        }else {
            console.log("INSIDE IF@@@@@@+++++++");
            this.style.backgroundColor = "black";
            displayMessage.textContent = "Try again!";
        }
    });
}


resetColorsButton.addEventListener("click", function(){
    var colors = generateRandomColors(6);
    var pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;

    console.log("pickedColor inside of reset ===" + pickedColor);

    displayMessage.textContent = "";

    console.log("clicked resetColors button");
    //console.log("pickedColor === " + pickedColor);
   
    for(var i = 0; i < squares.length ; i++) {
        squares[i].style.backgroundColor = colors[i];
        console.log("colors[i] > ", colors[i]);
    }
});



function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);


    return "rgb(" + red + ", "+ green + ", "+ blue + ")";
}

function generateRandomColors(num) {
    var array = [];

    for (var i = 0; i < num ; i++){
        array.push(randomColor());
    }

    console.log("generateRandomColors!!! runnung");
    return array;
}

function pickColor(arrayofColors){

    var number = arrayofColors.length - 1;

    var randomPickColor = Math.floor(Math.random() * number);
   
    return arrayofColors[randomPickColor];

}