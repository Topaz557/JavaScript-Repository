function count_Function() { // Here I am creating the "count" function
    document.getElementById("Counting").innerHTML = Count(); //Here I am asking java to return the element "counting"
    function Count() {// here I am creating a nested function 
        var Starting_point = 9; // Here I am identifying the starting point
        function Plus_one() {Starting_point += 1;} // Here I am identifying that the starting point will have one added to it 
        Plus_one();// Here I am adding the one by calling it ()
        return Starting_point; //Here I am returning the "starting point" which causes the starting point to also be added by one. 
    }
}