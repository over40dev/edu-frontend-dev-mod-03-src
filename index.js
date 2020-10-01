var title = document.getElementById('title');

var myButton = document.getElementById("btn");
myButton.addEventListener('click', () => {
  myButton.style.background = "red";
  title.textContent = "I'm learning JS!!!";
});
