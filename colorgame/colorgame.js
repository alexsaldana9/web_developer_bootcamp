var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 0, 255)",
];

var square1 = document.getElementById("1s");

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length ; i++) {
    squares[i].style.backgroundColor = colors[i];
}

$("#1s").click(function(){
    alert("sdklfjksdjfl");
    square1.classList.add("done");
});


