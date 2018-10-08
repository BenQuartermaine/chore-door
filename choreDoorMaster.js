// Setup for picture & door logic
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let startButton = document.getElementById('start');
let streakCounter = document.getElementById('streak');
let highScore = document.getElementById('all-time');
let motivBox = document.getElementById('motivWindow');
let streak = 0;
let highScoreNum = 0;

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);

  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  } else {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  };

const randomFactGenerator = () => {
  const fact = Math.floor(Math.random() * 4)

  if (fact === 0){
    return motivBox.innerHTML = "foragers communily made love and raised the resulting children together";
  } else if (fact === 1) {
    return motivBox.innerHTML = "money is universal trust, without the trust";
  } else if (fact === 1) {
    return motivBox.innerHTML = "agriculture was perhaps human kinds biggest downfall";
  } else {
    return motivBox.innerHTML = "What if we had no religion?";
  }
}

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
  };

const isClicked = door => {
    if (door.src == closedDoorPath) {
    return false;
    } else {
    return true;
    }
  };

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
    streak++;
    streakCounter.innerHTML = streak;
    if (highScoreNum < streak) {
      highScore.innerHTML = streak;
    };
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
    streak = 0;
    streakCounter.innerHTML = streak;
  }
  currentlyPlaying = false;
    motivBox.innerHTML = randomFactGenerator();
  };

const playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
      gameOver('win');
    } else if (isBot(door)) {
      gameOver('lose');
    }
  };

door1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(door1)
  }
  };
door2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(door2)
  }
  };
door3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(door3)
  }
  };


const startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  motivBox.innerHTML = 'Whats it guna be?'
  currentlyPlaying = true;
  randomChoreDoorGenerator();
  }

startButton.onclick = () => {
    startRound();
  }


startRound()




