function my_Dictionary() {// Here we create a dictionary
    var Animal = { // Here we are creating a variable named Animals
        Species:"Fish",// Here we are assining fish as the species
        Color:"Orange",// Here we are assining orange as the color  
        Breed:"ClownFish",// Here we are assining ClownFish as the breed
        Age:"8",// Here we are assining the animals age
        Sound:"gurgle gurgle",// Here we are assining the noise the animal makes
    };
    delete Animal.Sound; //Here we are deleting the sound the animal makes
    document.getElementById("Dictionary").innerHTML=Animal.Sound; // Here we are asking for a return value of sound, however it has been removed so will display as undefined. 
}