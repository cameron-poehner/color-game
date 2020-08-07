var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var hard = document.querySelectorAll('.hard');
var modeButtons = document.querySelectorAll('.mode');

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset () {
     // Generate all new colors
     colors = generateRandomColors(numSquares);
     // Pick a new random color from array
     pickedColor = pickColor();
     // Change colorDisplay to match picked color
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     messageDisplay.textContent = "";
     // Change colors of square
     for (var i = 0; i < squares.length; i++) {
         if (colors[i]) {
         squares[i].style.display = "block";
         squares[i].style.backgroundColor = colors[i];
         } else {
             squares[i].style.display = "none";
         }
     }
     h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener('click', function() {
   reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add Event Listeners to squares
    squares[i].addEventListener('click', function(){
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to Pcked Color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";       
        }
    });
}

function generateRandomColors(num) {
    var myArray = [];
    for (var i = 0; i < num; i++) {
        myArray.push(randomColor());
    }
    return myArray;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}