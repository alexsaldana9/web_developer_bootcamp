
var age = prompt("your age:");
alert("Your age is : " + age);


function isOdd(age){
    if (age % 2 != 0)
        return true;
    else
        return false;
}


var isSquare = function (n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};

if (Math.sign(age) === -1) {
    alert("Error -  you entered a negative number for age");
}

if (age == 21) {
    alert("Happy bday");
}

if (isOdd(age) == true) {
    alert("your age is odd");
}

if (isSquare(age)) {
    alert("your age is a perfect square");
}