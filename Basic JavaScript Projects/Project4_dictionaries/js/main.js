function my_Dictionary() {
    var Animal = {
        Species:"Fish",
        Color:"Orange",
        Breed:"ClownFish",
        Age:"8",
        Sound:"gurgle gurgle",
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}