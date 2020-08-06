var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');

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
            console.log('correct!');
        } else {
            console.log('wrong!');
        }
    });
}