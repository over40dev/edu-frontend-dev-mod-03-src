// /////////////////////////////////////// Complex Data Types - Objects Part 2
// // /////////////////////////////////////// Objects: describe a peice of data
// in depth

// Create an object that describes
// something of your choosing, like a car or animal. Give that object 5
// key/value pairs that include all primitive and complex data types Give the
// object 1 method that uses the 'this' keyword to console log something from
// the object when called console.log 2 properties from the object, once with
// 'dot' notation and once with 'bracket' notation.
var myCar = {
    brand: "Honda",
    doors: 2,
    isPetAllowed: false,
    friendsWithMe: [
        'Joe', 'Jane'
    ],
    details: {
        color: 'white',
        year: 2020
    },
    printSummary: function () {
        const {brand, doors, isPetAllowed} = this;
        const {year, color} = this.details;
        console.log(`My car is a ${color} ${doors} door ${year} ${brand}! Rules: pets are ${isPetAllowed
            ? 'allowed'
            : 'not allowed'} in car!`);
    },
    printFriends() {
        console.log('Friends with me: ', ...this.friendsWithMe);
    }
}

myCar.printSummary();
myCar["printFriends"]();
