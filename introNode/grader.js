
var scoresStudent1 = [90, 98, 89, 100, 100, 86, 94];
var scoresStudent2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];


average(scoresStudent1);
average(scoresStudent2);

function average(scores) {
    var count = 0;
    var arrayLength = scores.length;
    var average = 0; 

    for (var i = 0; i < arrayLength; i++){
        //console.log(scores[i] + "===" + i);
        count = count + scores[i];
    }
    average = Math.round((count / arrayLength));
    //average = Math.round(average);

    console.log("average = " + average);

    //console.log("scores array length ---" +scores.length  );
}