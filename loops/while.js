var answer = prompt("are we there yet?");

while (answer != "yes" && answer != "yeah"){
    console.log("Nope");
    answer = prompt("are we there yet?");
}
console.log("We made it");