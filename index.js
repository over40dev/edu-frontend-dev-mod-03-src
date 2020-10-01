var title = document.getElementById('title');
var myButton = document.getElementById("btn");
var counter = 5

myButton.addEventListener('click', () => {
  // add one line
  console.log(counter);
  counter+=5;
  console.log(counter);

  // don't change this
  myButton.textContent = counter;
});
