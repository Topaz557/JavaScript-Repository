function countdown() {// Here I am creating the countdown function
    var seconds = document.getElementById("seconds").value;// Here I am creating the variables (seconds)

    function tick() { // Here I am creating the "tick" function which will act as a countdown
        seconds = seconds - 1;
        timer.innerHTML = seconds; // Here I am setting the computers timer to seconds
        var time = setTimeout(tick, 1000); // Here I am setting the value to 1000'ths of second
        if (seconds == -1) { // Here I am creating a return value for when the seconds tick down and reach -1
            alert ("Time's up!"); // Here I am creating an alert that will populate with the message times up when the countdown is reached
            clearTimeout(time); // Here I am clearing the timer once the countdown has been reached so it can be reset and used to create another countdown based on value entered
            timer.innerHTML = "";
        }
    }
    tick();
}