var i = 0;
while(i < 23){
    i = i+1
    var x = i
    x = Math.round(((((x-12)*(x-12))/48)+1)*150)
    console.log(x+" "+i)
}