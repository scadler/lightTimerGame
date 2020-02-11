function switchLight(i){
    i = i%23;
    i = i+1
    var x = Number(Math.round((((((i-12)*(i-12))/48)+1)*400)-325))
        setTimeout(() => {  console.log(x+" "+i); switchLight(i)}, x);
}
var i = 0
var x = 1000
switchLight(i)
