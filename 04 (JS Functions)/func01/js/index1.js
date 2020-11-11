// Functions - Part01 - Mini-Challenge 1
//Challenge: You are a teacher at a school and you need to send a message to all your students that school is cancelled for the day! You need to do this quickly as the day is about to start and the students will be starting to leave their houses.

//Please write the code needed in the function that will alert all the students. Be as inventive with the text as you like and please share on Discords #share-your-code channel

function sendText( firstName, lastName ) {
  if (firstName && lastName) {
    console.log(`IMPORTANT!!! Hello ${firstName} ${lastName}, school has been cancelled for today!`);
  }
}
sendText()


sendText('Xian', 'Lee')
sendText('Anna', 'Seeberg')
sendText('Robert', 'Anderson')
sendText('Diane', 'Leming')
sendText('Mariam', 'Dover')