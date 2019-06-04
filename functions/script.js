
function isEven(num) {
    if (num % 2 === 0){
        return true;
    }else {
        return false;
    }
}

console.log("is 3 even? ");
console.log(isEven(3));

console.log("is 4 even? ");
console.log(isEven(4));


function factorial(num) {
    var result = 1;

    while (num != 0) {
        result = result * (num);
        num --;
    }
    console.log(result);
}

console.log("factorials =====");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(1));


console.log("======================");

console.log("replace - with _");

function kebabtoSnake(string) {
    string = string.replace("-", "_");
    return string;
}

console.log(kebabtoSnake("HOLA-hola"));
console.log(kebabtoSnake("HOLA-hola-salut"));
console.log(kebabtoSnake("HOLA"));

console.log("REPLACE in all occurences - Using Regular expression");

function replaceAllOccurances (str) {
    var newString =  str.replace(/-/g, '_');
    return newString;
}

console.log(replaceAllOccurances("HOLA-hola-salut"));
console.log(replaceAllOccurances("HOLA-hola"));

console.log("SCOPE ===================");

var num = 8;
function doMath() {
    num += 1;
    if (num % 5 == 0) {
        return true;
    } else {
        false
    }
}

num += 1;
console.log(doMath());