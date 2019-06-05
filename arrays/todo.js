
var list = [];

var action = prompt("What would you like to do ?");

while (action == "new") {
    var item = prompt("Enter new item for todo ");
    list.push(item)

    action = prompt("What would you like to do ?");
}



// if (action == "new") {

//     var item = prompt("Enter new item for todo ");
//     list.push(item)


// } else if (action == "list") {

//     console.log(list);

// }else if (action == "quit") {
//     console.log("you entered quit");
// }


if (action == "list") {

    console.log(list);

}else if (action == "quit") {
    console.log("you entered quit");
    console.log(list);

} else {
    console.log("Enter valid option");
}