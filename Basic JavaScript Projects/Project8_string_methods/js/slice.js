function slice_Method() {
    var Sentence = "All work and no play makes johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section[0].toUpperCase()+Sentence.slice(28,33);
}
function search_Method() { // Here I am creating a search function
    var string = "This is the sentence";//  
    document.getElementById("Search").innerHTML =string.search("sentence");
}