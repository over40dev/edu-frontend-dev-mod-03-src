// For Loops with if statements We are trying to find a table for my speed
// dating group to sit at, that is the most economical for the restaurant. How
// many options do I have?

const tableNumbers = [
    5,
    14,
    7,
    10,
    20,
    11,
    12,
    15,
    3
]

for (let i = 0; i < tableNumbers.length; i++) {
    if (tableNumbers[i] % 2 === 0) {
        console.log(tableNumbers[i])
    }
}

// Mini Challenge: We have decided to play a game between all of us. Create a
// loop that loops over the numbers given to each one of us. If the person has
// even number, print out the word 'blue team'. If it is odd, print out the word
// 'red team'.

const people = 56

for (let i = 1; i <= people; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - Blue Team`);
    } else {
        console.log(`${i} - Red Team`);
    }
}