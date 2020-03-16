var a = 5;
var b = 13;
// swap code goes here

// a = a - (a-b);
// b = b + (a-b);


if(a > b) {
    a = a - (a-b);
    b = b + (a-b);
}else {
    console.log("Entry else");
    a = a - ((b-a)*-1);
    console.log("a --------", a);
    console.log("b --------", b);

    b = ((b - a)*(-1)) ;
    console.log("b === --", b);
}


console.log("====================");

console.log("b ===", b);

console.log("a should be 13  === ", a);
console.log("b should be 5 === ", b);


//var arr = [a , b , 2];
// a = arr[2];
// console.log("arr[2] ==", arr[2]);

// b = arr[0];
// console.log("arr[0] ==", arr[0]);

// a = arr[1];
// console.log("arr[1] ==", arr[1]);



// console.log("a should be 3  === ", a);
// console.log("b should be 5 === ", b);