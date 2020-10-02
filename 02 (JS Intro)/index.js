//////////////////
// Conditionals //
//////////////////

// How we ask our program a question about our data and then run a specific set of code depending on the answer.

var color = "yellow"

if(color === "red"){
    console.log("It is red!")
} else if(color === "yellow"){
    console.log("It is yellow!")
} else if(color === "black"){
    console.log("It is black!")
} else {
    console.log("The color is not red or yellow")
}

// Login Form
var username = 'rick123';
var password = 'aL8#klfo';

if (username !== 'rick123') {
    console.log('username is incorrect');
} else if (password !== 'aL8#klfo') {
    console.log('password is incorrect');
} else {
    console.log('username and password is correct... logging in...');
}
 