var title = document.getElementById('title');
var myButton = document.getElementById("btn");
var counter = 0

myButton.addEventListener('click', () => {
  // add one line
  counter++;

  // don't change this
  myButton.textContent = counter;
});
