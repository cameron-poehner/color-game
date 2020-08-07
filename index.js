var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function() {
    // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // Change colors of square
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
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