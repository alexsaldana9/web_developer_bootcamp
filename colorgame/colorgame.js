(function(){
    var squares = document.querySelectorAll(".square");
    var colorDisplay = document.getElementById("colorDisplay");
    var displayMessage = document.getElementById("displayMessage");
    var resetColorsButton = document.getElementById("newColorsBtn");

    var colors;
    var pickedColor;

    resetColors();

    for(var i = 0; i < squares.length ; i++) {
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
        console.log("clicked resetColors button");

        resetColors();
    });


    function resetColors() {
        colors = generateRandomColors(6);
        pickedColor = pickColor(colors);
        colorDisplay.textContent = pickedColor;
        displayMessage.textContent = "";

        console.log("pickedColor inside of reset ===" + pickedColor);
       
        for(var i = 0; i < squares.length ; i++) {
            squares[i].style.backgroundColor = colors[i];
            console.log("colors[i] > ", colors[i]);
        }
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
})();