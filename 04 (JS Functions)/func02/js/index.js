// Functions - Part02 - Mini-Challenge 1

const robot = document.querySelector('.robot')

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

const moveRight = 100;
let pos = Number(robot.style.left);

function moveRobot() {
    //add code here
    pos += moveRight;
    robot.style.left = `${pos}px`;
}
robot.addEventListener('click', moveRobot)


