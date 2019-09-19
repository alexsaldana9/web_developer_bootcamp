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



// for(var i = 0; i < squares.length ; i++) {
//     squares[i].addEventListener("click", function(){
//         this.classList.toggle("done");
//     });
// }

function changeColor1() {
    this.style.backgroundColor = "green";
}
