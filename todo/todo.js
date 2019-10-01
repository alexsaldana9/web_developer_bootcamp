

$("li").on('click', function () {
    var gValue = $(this).attr('class');
    if (gValue == 'blue') {
        $(this).removeClass("blue");
        $(this).addClass("red");
    } else {
        $(this).removeClass("red");
        $(this).addClass("blue");
    }
});



function addItem(){
    var ul = document.getElementById("dynamic-list");
    var newItem = document.getElementById("dataInput");
    var li = document.createElement("li");

    li.setAttribute('id',newItem.value);
    li.appendChild(document.createTextNode(newItem.value));
    ul.appendChild(li);

    

}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var deleteItem = document.getElementById("dataInput");
    var item = document.getElementById(deleteItem.value);
    ul.removeChild(item);
}