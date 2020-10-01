var myButton = document.getElementById("btn");
myButton.addEventListener('click', () => {
  console.log('You clicked header button and changed the bg-color!');
  myButton.style.background = "red";
});
