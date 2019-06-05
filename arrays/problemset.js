function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0 ; i--) {
        console.log(arr[i]);
    }
}



function isUniform(arr1, arr2) {
    if (arr1.length != arr2.length){
        console.log("not same length");
        return false;
    }

    console.log("OUT of loop - 1");

    var length = arr1.length;

    for (var i = 0; i < length; i ++) {

        console.log("arr1[i]  == " , arr1[i]);
        console.log("arr2[i] == " , arr2[i]);

        console.log("============");

        if (arr1[i] != arr2[i]){
            console.log("arrays are not equal");
            return false;
        }
    } 

    console.log("These are equal");
        return true;
}

function sumArray(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length ; i ++){
        sum = arr[i] + sum;
    }
    return sum;
}

function max(arr) {

    var maxValue = arr[0];

    for (var i = 1; i < arr.length ; i ++){

        if (arr[i] > maxValue){
            maxValue = arr[i];
        }
    }
    return maxValue;
}




console.log(" ==== printReverse =======");
var sample = ["item1", "item2", "item3"];

console.log(printReverse(sample));
console.log("***************");


console.log(" ==== isUniform =======");

var array1 = [1,2,3];
var array2 = [1,2,5];

console.log(isUniform(array1, array2));
console.log("***************");

var array3 = [1,2,3];
var array4 = [1,2,3];
console.log(isUniform(array3, array4));
console.log("***************");

var array5 = [1,2];
var array6 = [1,2,3];
console.log(isUniform(array5, array6));


console.log(" ==== sumArray =======");
var array7 = [1,2,3];
var array8 = [10,3,10,4];
var array9 = [-5, 100];
console.log(sumArray(array7));
console.log(sumArray(array8));
console.log(sumArray(array9));



console.log(" ==== max =======");
var array10 = [1,2,3];
var array11 = [10,3,10,4];
var array12 = [-5, 100];
console.log(max(array10));
console.log(max(array11));
console.log(max(array12));

