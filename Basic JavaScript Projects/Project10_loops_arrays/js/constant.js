function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
function Constant_Function1() {
    const X = 10;
    //X = 2; //Comment out when you want to function properly, we are creating an error here by attempting to assign another value to a constant
    document.write(X);
}
var Y = 82
document.write(Y);
{
    let Y = 33; //Change to let to var when you want the code to return 82 33 33
    document.write ("<br>" + Y);
}
document.write("<br>" + Y);

document.getElementById("demo").innerHTML = myFunction("John");
function myFunction(name) {
    return "Hello " + name;
}