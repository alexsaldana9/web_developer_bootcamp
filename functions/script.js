
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

console.log("REPLACE in all occurences");

// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, '-'), replacement);
// };


function replaceAllOccurances (str) {
    var find = '-';
    var re = new RegExp(find, 'g');

str = str.replace(re, '_');
}
