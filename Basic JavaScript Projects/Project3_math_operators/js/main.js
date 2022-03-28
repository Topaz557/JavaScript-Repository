function addition_Function() {
  var addition = 2 + 2;// here creating an addition function
  document.getElementById("Math").innerHTML= "2 + 2 =" + addition ; // here we are returning the function we call in our HTML with the onclick
}
function subtraction_Function() {
var Subtraction = 5 - 2;// here we are creating a subtraction function
document.getElementById ("Math2").innerHTML= "5 - 2 =" + Subtraction// here we are returning the function we call in our HTML with the onclick 
}
function multiplication() {
    var simple_Math = 6 * 8; // Here we are creating a multiplication function
    document.getElementById("Math3").innerHTML= "6 x 8 = " + simple_Math;// here we are returning the mulitplcation function in our HTML with the onclick
}
function division() {
    var simple_Division= 48 / 6; // Here we are creating a division function
    document.getElementById("Math4").innerHTML= "48 / 6 =" + simple_Division;// Here we are returning the division function and displaying it with the HTML onclick
}
function more_Math() { 
    var simple_All = (1 + 2) * 10 / 2 -5; // Here we are creating a multi-step math problem and assinging all of the values 
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_All;// Here we are returning the multiple math functions with the Onclick function in HTML
}
function more_Math2() {
    var more_Math2 = 25 % 6; // Here we are creating a divsion with remainder function/giving it a value 
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + more_Math2;// Here we are returning the divsion/remainder function with the HTML onclick
}
function negation_Operator() {
    var x = 10; // Here we are assinging the Variable to be 10
    document.getElementById("Math7").innerHTML = -x; // Here we are showing the operations done to the variable that will be returned with the Onclick in HTML 
}
var X = 5 ; // Here we are assinging the X variable to be 5
X++; // Here we are showing an addition to the value
document.write( X ); // Here we are returning or writing the value in the HTML 
document.write("<br>"); // Here we are creating a line break so that the document write will not display on the same line as the next value
var Y = 5.25 // Here we are assinging Y's value
Y--; // Here we are showing subtraction to the value
document.write( Y ); // Here we are returning the Y value after subtraction 
window.alert(Math.random() * 100); // Here we are creating a window alert box to display randomly between 0 and 100