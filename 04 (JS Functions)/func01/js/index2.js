// Functions - Part01 - Mini-Challenge 2

//Send each student their test results
function sendText(first, last, result) {
    if (first && last && result) {
      console.log(`Hello ${first} ${last}, your test result is ${result}%`);
    }
}

sendText('Xian', 'Lee', 49)
sendText('Anna', 'Seeberg', 89)
sendText('Robert', 'Anderson', 78)
sendText('Diane', 'Leming', 42)
sendText('Mariam', 'Dover', 50)
