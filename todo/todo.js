

// $("li").on('click', function () {

//     console.log("clicked li");
//     var gValue = $(this).attr('class');
//     if (gValue == 'orange') {
//         $(this).removeClass("blue");
//         $(this).addClass("red");
//     } else {
//         $(this).removeClass("red");
//         $(this).addClass("blue");
//     }
// });


function addItem(){
    var count = 0;
    var textInput  = document.getElementById('todo-input').value;
    textInput.trim();
    console.log("textInput ....", textInput);
    console.log("textInput length..", textInput.length);

    if (textInput === "" || textInput.length === 0 || textInput === null ||  textInput.length === 1) {
        console.log("enter some todo");
        // TODO: Display a readable UI message
    } else {
        var li = document.createElement('li');
    
        var list = document.createTextNode(textInput);
        li.appendChild(list);
    
        let buttonDone = document.createElement('BUTTON'); 
        buttonDone.textContent = 'Done';
        buttonDone.className = 'buttonDone btn btn-secondary';
        buttonDone.addEventListener("click", itemDone);

        // let glyph = document.createElement('span');
        // glyph.className = "checked";
        // li.appendChild(glyph);

        // add glyph icon to <i class="glyphicon glyphicon-ok"></i>
        // let glyph = document.createElement('span');
        // glyph.className = "glyphicon glyphicon-ok hide-glyph";
    
        document.getElementById("dynamic-list").appendChild(li);
        li.appendChild(buttonDone);
       // li.append(glyph);
    
        document.getElementById("todo-input").value = "";
    
        count = $("#dynamic-list li").length
    
        $('#dynamic-list li').each(function(i) {
            $(this).attr({
                "id": "li"+(i+1),
                "onmousedown": "itemDone(this.id)"
            });
        });
    
        $('#dynamic-list li button').each(function(i) {
            $(this).attr('id', ('button' + (i+1)));
        });

        //$('#todo-input').empty();
        //textInput.length=0;
        textInput.trim();

        console.log("textInput lenght after add >>", textInput.length);

    }

    textInput.trim();
}


/*function itemDone(id){
    var listitem = document.getElementById(id);
    $(listitem).addClass("doneItem");
}*/

function itemDone(id){
    var listitem = document.getElementById(id);
    // let glyph = document.createElement('span');
    // glyph.className = "checked";
    // listitem.appendChild(glyph);

    console.log("listitem ======" , listitem);
    $(listitem).toggleClass("doneItem");
    $(listitem).toggleClass("checked");

    //glyph.toggleClass("checked");

    // let glyph = document.createElement('span');
    // glyph.className = "checked";

    //$(listitem).toggleClass("checked");

    // let glyph = document.createElement('span');
    // glyph.className = "glyphicon glyphicon-ok";
    // listitem.appendChild(glyph);
}


function clearList(){
    console.log("clicked CLear");

    $('#dynamic-list').empty();
    $('#todo-input').value = " ";
}


function downloadInnerHtml(filename, elId, mimeType) {
   //var elHtml = document.getElementById(elId).innerHTML;
   var elHtml = document.getElementById(elId).textContent;
   // var elHtml = document.getElementById(elId).text();

    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

$('#exportList').click(function(){
    console.log("clicked export");
    var fileName =  'todo.txt'; // You can use the .txt extension if you want
    downloadInnerHtml(fileName, 'dynamic-list','text/html');

});



