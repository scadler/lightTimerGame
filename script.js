var mouse = {
    down: false,
}
function switchLight(i){
    if(mouse.down === true){
        if(i === 12){
            var score = Number($("#score").text());
            score = score +3;
            $("#score").text(score);
        }
        else if(i === 11 || i === 13){
            var score = Number($("#score").text());
            score = score +1;
            $("#score").text(score);
        }
    }
    else{
    i = i%23;
    i = i+1
    var x = Number(Math.round((((((i-12)*(i-12))/48)+1)*400)-325))
    if(x>500){
        setTimeout(() => {  console.log(x+" "+i); switchLight(i)}, 500);
    }
    else{
        setTimeout(() => {  console.log(x+" "+i); switchLight(i)}, x);
    }
    $(".light").css("background-color", "black");
    var id = i;
    $("#"+id).css("background-color", "yellow");
}
}
var i = 0
var x = 1000
switchLight(i)

$(document).click(function(){
    mouse.down = !mouse.down;
    switchLight(i)
});