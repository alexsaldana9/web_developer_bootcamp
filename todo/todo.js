

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
    var count = 0;
    var textInput  = document.getElementById('todo-input').value;
    console.log("textInput .." , textInput);

    var li = document.createElement('li');
    console.log("li .... ", li);
    
    var list = document.createTextNode(textInput);
    li.appendChild(list);

    console.log("list ....", list);

    let buttonDone = document.createElement('BUTTON'); 
    buttonDone.textContent = 'Done';
    buttonDone.className = 'buttonDone';
    buttonDone.addEventListener("click", itemDone);

    document.getElementById("dynamic-list").appendChild(li);
    li.appendChild(buttonDone);

    document.getElementById("todo-input").value = " ";


    count = $("#dynamic-list li").length
    console.log("count li >>", count);

    $('#dynamic-list li').each(function(i) {
        //$(this).attr('id', ("li"+(i+1), 'onmousedown' , 'changeColor(this.id)'));

        $(this).attr({
            "id": "li"+(i+1),
            "onmousedown": "itemDone(this.id)"
        });
    });

    $('#dynamic-list li button').each(function(i) {
        $(this).attr('id', ('button' + (i+1)));
    });
}

function itemDone(id){
    // var ul = document.getElementById("dynamic-list");
    // var deleteItem = document.getElementById("dataInput");
    // var item = document.getElementById(deleteItem.value);
    // ul.removeChild(item);
    console.log("selected done button");
    //$('#dynamic-list ul li.selected').css("color", "red");


    var listitem = document.getElementById(id);
    //listitem.classList.add('doneItem');

    $(listitem).addClass("doneItem");

    //listitem.style.backgroundColor = "red";
    // listitem.id += "-run";



    // $(this.).attr({
    //     "color": "red"
    // });


       

}


