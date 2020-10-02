// Tools to help
    // console.log() = shows you the value of whatever is placed in the () when you click "RUN CODE"
    // Comments:  Javascript will ignore these lines like the one you see here with '//'.

// Introduction to Variables
    // Declare
    // Assign/Define
    // Use

var number = 10
console.log(number - 5)

// Find if the two boxe's combined height will fit in the back of the truck.
// First declare 2 variables, 'box1' and 'box2; and assign them each the height values shown in the slide.
var box1 = 1.342;
var box2 = 2.038;
// Second, create a variable named 'combinedHeight' that stores the value of box1 added to box2
var combinedHeight = box1 + box2;
// Third, create a variable named 'truckHeight' that stores the truck height capacity from the slide.
var truckHeight = 3.5;
// Lastly, console.log the value of the combinedHeight subtracted from the truckHeight, if it is a positive number, they will fit!
console.log((truckHeight - combinedHeight) > 0 ? 'Will fit' : 'Will not fit');
