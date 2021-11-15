let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let botDoorPath = "https://st.depositphotos.com/1887105/1745/v/950/depositphotos_17452413-stock-illustration-cartoon-mom-or-mother.jpg"
let beachDoorPath = "https://image.freepik.com/free-vector/tropical-landscape-background-zoom_52683-42068.jpg"
let cityDoorPath = "https://image.freepik.com/free-vector/city-skyline-silhouette-sunset_169241-1701.jpg"

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKMom7oYiSrexsWInv6FcpuqWfKcTDIhqRHL4Wm_prpQI17pJ6ElFeSrH7LuI_eB-52I&usqp=CAU"

let startButton = document.getElementById('start');

let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
}
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
  return false;
} else {
  return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door)) {
    gameOver('lose');
  }
}

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = cityDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = cityDoorPath;
  } else { (choreDoor === 2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = cityDoorPath;
  } 
}

door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) {
      doorImage1.src = openDoor1;
      playDoor(door1);
      }
    }

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
      playDoor(door2);
      }
    }
  
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
      doorImage3.src = openDoor3;
      playDoor(door3);
      }
    }

startButton.onclick = () => {
  if(!currentlyPlaying) {
  startRound();
  }
}

const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'GoodLuck!';
  randomChoreDoorGenerator();
}


const gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?'
  }else {
  startButton.innerHTML = 'GAME OVER! Play again?'
}
currentlyPlaying = false;
}




startRound();

