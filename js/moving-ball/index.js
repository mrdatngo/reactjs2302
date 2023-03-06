let containerElem = document.querySelector('#ball-container');
let ballElem = document.querySelector('#ball');

// initital data

let screenWidth = 300;
let ballWidth = 30;

containerElem.style.width = screenWidth + 'px';
containerElem.style.height = screenWidth + 'px';
ballElem.style.width = ballWidth + 'px';
ballElem.style.height = ballWidth + 'px';

let posX = 30;
let posY = 50;
ballElem.style.transform = `translate(${posX}px,${posY}px)`;

posX = posX + 2;
posY = posY + 2;

moving();

// 1s <-> 10^7(10^8) unit
async function moving() {
  let vecX = 2;
  let vecY = 2;
  while (true) {
    if (posX + vecX > screenWidth - ballWidth || posX + vecX < 0) {
      vecX *= -1;
      nextX = randomVec(5);
      //   if (vecX > 0) {
      //     vecX = nextX
      //   } else {
      //     vecX = -nextX
      //   }
      vecX = (vecX / Math.abs(vecX)) * nextX;
    }
    if (posY + vecY > screenWidth - ballWidth || posY + vecY < 0) {
      nextY = randomVec(5);
      vecY *= -1;
      vecY = (vecY / Math.abs(vecY)) * nextY;
    }

    posX = posX + vecX; // posX += vecX
    posY = posY + vecY; // posY += vecY

    ballElem.style.transform = `translate(${posX}px,${posY}px)`;
    await sleep(10);
  }
}

function randomVec(maxValue) {
  return Math.floor(Math.random() * (maxValue + 1)) + 1;
}

async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
