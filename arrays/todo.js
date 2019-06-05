
var list = [];

var action = prompt("What would you like to do ?");

while (action == "new") {
    var item = prompt("Enter new item for todo ");
    list.push(item)

    action = prompt("What would you like to do ?");
}


if (action == "list") {

    //console.log(list);
    list.forEach(function(list, item){
        console.log(item + ": " + list);
    });

}else if (action == "quit") {
    console.log("you entered quit");
    console.log(list);

}else if (action == "delete"){
    var index = prompt("Enter index of todo list to delete");
    list.splice(index, 1);
} 
else {
    console.log("Enter valid option");
}