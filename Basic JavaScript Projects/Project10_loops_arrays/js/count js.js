function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) { // Here I am creating a while loop
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}