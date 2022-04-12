function cat_pics() { // Here I am creating a function
    var Cat_Picture = []; // Here I am creating a variable that changes depending on what picture we assign
    Cat_Picture[0] = "sleeping";// Here I am creating my array 
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";// Here I fininsh my array
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; // Here I am writing out a string plus a specific value returned from the array
}