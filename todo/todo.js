

$("li").on('click', function () {

    console.log("clicked li");
    var gValue = $(this).attr('class');
    if (gValue == 'orange') {
        $(this).removeClass("blue");
        $(this).addClass("red");
    } else {
        $(this).removeClass("red");
        $(this).addClass("blue");
    }
});


function addItem(){
    var textInput  = document.getElementById('todo-input').value;
    console.log("textInput .." , textInput);

    var li = document.createElement('li');
    console.log("li .... ", li);
    
    var list = document.createTextNode(textInput);
    li.appendChild(list);

    console.log("list ....", list);

    document.getElementById("dynamic-list").appendChild(li);
    document.getElementById("todo-input").value = " ";
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var deleteItem = document.getElementById("dataInput");
    var item = document.getElementById(deleteItem.value);
    ul.removeChild(item);
}