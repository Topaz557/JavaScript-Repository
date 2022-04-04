if (1 < 2){ // Here I am creating a simple If statement
    document.write("The left number is smaller than the number on the right")
}
function get_Date(){ // here I am creating a variable
    if (new Date().getHours() < 18) { // Here I am creating my first If statement of the variable
        document.getElementById("Greeting").innerHTML = "How are you today"
    }
    if (new Date().getHours() >= 18) { // Here I am creating the second If statement of my variable
        document.getElementById("Greeting2").innerHTML = "How are you This evening"
    }
}