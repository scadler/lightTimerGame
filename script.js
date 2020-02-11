function switchLight(i){
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
    // id=id-1
    // id=id%23
    // $("#"+id).css("background-color", "black");
}
var i = 0
var x = 1000
switchLight(i)