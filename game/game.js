var secretNumber = 4;

var guess = prompt("Guess a number ");

alert("This is your number "+ guess);


if (Number(guess) === secretNumber){
    alert("you got the right number");
} else if (Number(guess) > secretNumber){
    alert("Too high");
}else if (Number(guess) < secretNumber) {
    alert("too low");
}