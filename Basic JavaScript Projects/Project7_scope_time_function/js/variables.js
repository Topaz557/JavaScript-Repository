var X = 10;// here I am creating a "global Variable"
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");
function Add_numbers_3() {
    var Y = 10; // Here I am creating a local variable
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100)
}
Add_numbers_3();
//Add_numbers_4();  //This is commeneted out currently to allow for the console debug method, remove // to display the error with Local Variable
document.write("<br>");
function Add_numbers_5() {
    var T = 10;
    console.log(15 + T);
}
function Add_numbers_6() {
    console.log(T + 100);
}
Add_numbers_5();
Add_numbers_6();