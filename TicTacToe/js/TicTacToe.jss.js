// this variable keeps track of whose turn it is.
let activePlayer = 'X';
// this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];

// this function is for placing an x or o in a square
function placeXOrO (squareNumber) {
    //this condition ensures a square hasnt been selected already
    //the .some() method is used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variables retires the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
            //if active player is equal to "X" the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/dog.png")';
            //Active player may ionly be X or O so, if not X it must be O
        } else {
            //if activePlayer is equal to o the o png is placed in html
            select.style.backgroundImage = 'url("images/cat.png")';
        }
        //square number and active player are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions.
        checkWinConditions();
        //this condition is changing the active player.
        if (activePlayer === 'X') {
            //if active player is 'x' change it to O
            activePlayer = 'O';
            //if active player is anything other than X.
        } else {
            //change the active player to x
            activePlayer = 'X';
        }
        //this function plays placement sound.
        audio('./media/robo.mp3');
        //this condition checks to see if it is computers turn
        if (activePlayer ==='O'){
            //this function disables clicking for computer choice.
            disableClick();
            //this function waits 1 second before computer places image and enables click.
            setTimeout(function (){computersTurn(); }, 1000)
        }
        //returning true is needed for our computers turn function to work.
        return true;
    }
    //this function results in a random square being selected
    function computersTurn() {
        //this bolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this conditin allows our while loop to keep trying if a square is selected already
        while(!success){
            //A random number between o and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number evaluated returns true, the square hasnt been selected et.
            if (placeXOrO (pickASquare)){
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}
//this function parses the selected squares array to search for win conditions.
//drawwinline function is called to draw line if conditions is met.
function checkWinConditions() {
    if      (arrayIncludes ('0X', '1X', '2X'))  {  drawWinLine(50, 100, 558, 100)  }
    else if (arrayIncludes ('3X', '4X', '5X'))  {  drawWinLine(50, 304, 558, 304)  }
    else if (arrayIncludes ('6X', '7X', '8X'))  {  drawWinLine(50, 508, 558, 508)  }
    else if (arrayIncludes ('0X', '3X', '6X'))  {  drawWinLine(100, 50, 100, 558)  }
    else if (arrayIncludes ('1X', '4X', '7X'))  {  drawWinLine(304, 50, 304, 558)  }
    else if (arrayIncludes ('2X', '5X', '8X'))  {  drawWinLine(508, 50, 508, 558)  }
    else if (arrayIncludes ('6X', '4X', '2X'))  {  drawWinLine(100, 508, 558, 508)  }
    else if (arrayIncludes ('0X', '4X', '8X'))  {  drawWinLine(100, 100, 520, 520)  }
    else if (arrayIncludes ('0O', '1O', '2O'))  {  drawWinLine(50, 100, 558, 100)  }
    else if (arrayIncludes ('3O', '4O', '5O'))  {  drawWinLine(50, 304, 558, 304)  }
    else if (arrayIncludes ('6O', '7O', '8O'))  {  drawWinLine(50, 508, 558, 508)  }
    else if (arrayIncludes ('0O', '3O', '60'))  {  drawWinLine(100, 50, 100, 558)  }
    else if (arrayIncludes ('1O', '4O', '7O'))  {  drawWinLine(304, 50, 304, 558)  }
    else if (arrayIncludes ('2O', '5O', '8O'))  {  drawWinLine(508, 50, 508, 558)  }
    else if (arrayIncludes ('6O', '4O', '2O'))  {  drawWinLine(100, 508, 510, 90)  }
    else if (arrayIncludes ('0O', '4O', '8O'))  {  drawWinLine(100, 100, 520, 520)  }
    // This condition checks for a tie. if none of the above conditions regster and 9
    //squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./media/flute.wav')
        //this function sets a .3 second timer before the reset game is called
        setTimeout(function()  { resetGame(); }, 1000);
    }
    //this funciton checks if an array includes 3 strings. it is used to check for
    //each win condition
    function arrayIncludes (squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawline function
        if (a === true && b === true && c === true)  { return true }
    }
}
    //this function makes our body element temporarily unclickable
    function disableClick() {
        //this makes our body unclickable
        body.style.pointerEvents = 'none';
        //this makes our body clicable again after 1 second
        setTimeout(function()  {body.style.pointerEvents = 'auto';}, 1000);
    }
    //this function takes a string paramter of the path you set earlier for
    //placement sound ('..media/place.mp3)
    function audio(audioURL) {
        //we create a new audio object and we pass the path as a paramater.
        let audio = new Audio(audioURL);
        //play method plays our audio sound
        audio.play();
    }
    //this function utilzes html canvas to draw win lines
    function drawWinLine (coordX1, coordY1, coordX2, coordY2) {
        const canvas = document.getElementById('win-lines')
        //this line guves us access to methods and properties to use on canvas
        const c = canvas.getContext ('2d');
        //this line indicates where the start of a lines X axis is
        let x1 = coordX1,
             //This line indicates the start of y axis
            y1 = coordY1,
            //this line indicates where the end of a lines X axis is
            x2 = coordX2,
             //this line where of a lines x axis is
            y2 = coordY2,
           //this variables stores temporary x axis data we updated in our animation loop
             x = x1,
             //this variable stores temporary y axis data we update in our animation loop
             y = y1;
     //this function interacts with the canvis
     function animateLineDrawing() {
         //this variables creates a loop.
         const animationLoop = requestAnimationFrame (animateLineDrawing);
         //tjos ,etjpd c;ears cpmtemt frp, ;ast ;pp[ oteratopm
        c.clearRect(0, 0, 608, 608)

        //this method starts a new path
        c.beginPath();
        //this Method moves us to a starting point for our line
        c.moveTo (x1, y1)
        //this method indicates the end point in our line
        c.lineTo (x, y)
        //this method sets the width of our line
        c.lineWidth = 10;
        //this method sets the colo of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this method drawas everything we laid out above
        c.stroke();
        //this condition checks if we've reached the endpoint
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point
            if (x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point
            if (y < y2) { y += 10; }
            //this condition cancels our animation loop
            //if we've reach the end points
            if (x >= x2 && y>= y2) { cancelAnimationFrame (animationLoop); }  
        }
        //this condition is similiar to the one above
        //this is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) {  cancelAnimationFrame (animationLoop);}
        }
     }
        //this function clears our canvas after our win line is drawn.
        function clear() {
            //this line starts our animation loop
            const animationLoop = requestAnimationFrame (clear);
            //this line clears our canvas
            c.clearRect(0, 0, 608, 608)
            //this line stops our animation loop
            cancelAnimationFrame (animationLoop);
        }
        //thjis line disawllows clicking while the win sound is playing
        disableClick();
        //this line palys the win sounds
        audio ('./media/violin.wav');
        //this line calls our main animation loop
        animateLineDrawing();
        //this line waits 1 second. then, clears canvas, resets game, and allows clicking agian
        setTimeout(function () { clear(); resetGame(); }, 1000);
     }
     function resetGame() {
         //this for loop iterates through each HTMl square element
         for (let i = 0; i < 9; i++)  {
             //this variable gets the html element of i
             let square = document.getElementById(String(i))
             square.style.backgroundImage = ''
         }
         selectedSquares = [];
    }

