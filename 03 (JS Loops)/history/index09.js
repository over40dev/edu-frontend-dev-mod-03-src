// loops and arrays part 2 Challenge: you are working at a very fancy new
// nightclub and in charge of letting people in based on their age. If they are
// not 21 years of age, you cannot let them in. Please send them a nice
// personalised message letting them know. Dont forget to share your code on the
// #share-your-code channel on discord.

const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    }, {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    }, {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    }, {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
];

for (let i = 0; i < nightClubRegister.length; i++) {
    const {name, lastname, age, gender} = nightClubRegister[i];
    if (age < 21) {
        console.log(`Sorry ${gender.toLowerCase() === 'male' ? 'Mr.' : 'Ms.'} ${name} ${lastname}, you have been denied access to the club because you do not meet the age requirement of 21.`)
    }
}
