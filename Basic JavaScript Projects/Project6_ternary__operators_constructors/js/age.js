function Vote_Function() {// Here I am creating the "age" Function
    var Age, Can_vote; // Here I am identifying the variable 
    Age = document.getElementById("Age").value;// Here i am assining age and value 
    Can_vote = (Age < 18) ? "You are too young": "You are old enough to vote";// Here I am creating a boolean logic, either it is or is not greater than 18 
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";// Here I am creating the return function, what will be displayed based upon the age. 
}