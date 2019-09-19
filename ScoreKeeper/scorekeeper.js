// alert("Connected!!");

var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Score = 0;
var p2Score = 0;
var inputVal = 0;
var winningScore = 5;
var gameover = false;

var scoreLimit = document.getElementById("limit").value;

var displayScore1 = document.querySelector("#p1DisplayScore")
var displayScore2 = document.querySelector("#p2DisplayScore")

p1button.addEventListener("click", function(){
    
    if(!gameover){
        p1Score++;
        console.log("p1 score: " + p1Score);

        document.getElementById("p1DisplayScore").innerHTML = p1Score;

        if(p1Score === winningScore){

            p1DisplayScore.classList.add("winner");
            console.log("game over!!!");
            gameover = true;
        }
        p1DisplayScore.textContent = p1Score;
    }
});

p2button.addEventListener("click", function(){
    if(!gameover){
        p2Score++;
        console.log("p2 score: " + p2Score);

        document.getElementById("p2DisplayScore").innerHTML = p2Score;

        console.log(" value of winning score = " + winningScore);

        if(p2Score === winningScore){

            p2DisplayScore.classList.add("winner");
            console.log("game over!!!");
            gameover = true;
        }
        p2DisplayScore.textContent = p2Score;
    }
});

reset.addEventListener("click", function(){
    console.log("delete scores ");
    p1Score = 0;
    p2Score = 0;
    document.getElementById("p1DisplayScore").innerHTML = 0;
    document.getElementById("p2DisplayScore").innerHTML = 0;
    document.getElementById('limit').value = '';
    document.getElementById('displayLimit').innerHTML = '';
});

function getLimitValue(){
    // Selecting the input element and get its value 
    inputVal = document.getElementById("limit").value;
    
    console.log("value of inputVal = " + inputVal);
    console.log("Change value of winning score before assigning inputVal = " + winningScore);

    //winningScore = inputVal;
    winningScore = parseInt(inputVal);

    console.log("Change value of winning score = " + winningScore);
    console.log("value of inputVal after the assigned = " + inputVal);


    displayLimit.textContent = inputVal;
}


// scoreLimit.addEventListener("click", function(){

//     document.getElementById("displayLimit").innerHTML = limit;
// });
