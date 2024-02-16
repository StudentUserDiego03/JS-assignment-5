
function colors(){
let inputText = document.getElementById("color_choice").value;
if (inputText=="red"){
    document.getElementById("color").style.color = "red";
}
if (inputText=="blue"){
    document.getElementById("color").style.color = "blue";
}
if (inputText=="green"){
    document.getElementById("color").style.color = "green";
}
}

function ranks(){
    let text = "";
    let colorNames = ["red", "blue", "green", "yellow"];
    for (i=0; i<colorNames.length; i++ ){
        text += colorNames[i] + "<br>";
    }
    document.getElementById("ranks").innerHTML=text;
}

function textRank(){
    let text = "";
    let first = document.getElementById("secondInput").value;
    while (first < 20) {
        text += first + "<br>";
        first++;
    }
    document.getElementById("rank").innerHTML=text
}