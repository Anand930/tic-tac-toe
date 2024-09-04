const buttons = document.querySelectorAll(".game-btn");

const winSituations = [
  [0, 1, 2],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
];




var player= Math.random()>0.5?"X":"0";
var gameover = false;

const gamestart = buttons.forEach((e) => {
  e.style.background = "grey";
  
  e.addEventListener('click', () => {
    if (gameover === false && player === "X" && e.style.background === "grey") {
      e.style.backgroundImage = "url('cross2.png')";
      e.style.backgroundSize = 'contain';
      e.style.backgroundRepeat = 'no-repeat';
      e.style.backgroundPosition = 'center';
      e.style.backgroundOrigin = "content-box"
      document.getElementById('h2-header').textContent = "Game is running";
      player = "0";
    } else if (gameover === false && e.style.background === "grey") {
      e.style.backgroundImage = "url('o.png')";
      e.style.backgroundSize = 'contain';
      e.style.backgroundRepeat = 'no-repeat';
      e.style.backgroundPosition = 'center';
      e.style.backgroundOrigin = "content-box"
      player = "X";
    }
    win();
  });
});

const buttonsArr = Array.from(buttons);
console.log(buttonsArr);

function win() {
  for (let i = 0; i < winSituations.length; i++) {
    const [a, b, c] = winSituations[i];
    if (
      gameover === false &&
      buttonsArr[a].style.background !== "grey" &&
      buttonsArr[a].style.backgroundImage === buttonsArr[b].style.backgroundImage &&
      buttonsArr[a].style.backgroundImage === buttonsArr[c].style.backgroundImage
    ) {
      gameover = true;
      if (buttonsArr[a].style.backgroundImage.includes("cross2.png")) {
        document.getElementById('h2-header').textContent = "Game ends, X wins";
      } else {
        document.getElementById('h2-header').textContent = "Game ends, 0 wins";
      }
      break;
    }
  }
}

function resetTheGame() {
  buttonsArr.forEach((e) => {
    e.style.background = "grey";
    // e.style.backgroundImage = "";
  });
  document.getElementById('h2-header').textContent = "Game start";
  player = "X";
  gameover = false;
  player= Math.random()>0.5?"X":"0";
  console.log(player);
  
}

document.getElementById('reset-btn').addEventListener('click', () => {
  resetTheGame();
});
