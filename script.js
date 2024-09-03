const buttons = document.querySelectorAll(".game-btn");

const winSituations = [
  [1, 2, 3],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [1, 5, 9],
  [3, 5, 7],
];

var state = "X";
var gameover= false;

const gamestart = buttons.forEach((e) => {
    
     e.addEventListener('click',()=>{
        if(gameover===false&&state==="X"&&e.innerText===""){
            e.innerText="X";
            state=state==="X"?"0":"X"
        }else if(gameover===false&&e.innerText===""){
            
            e.innerText="0"
            state=state==="X"?"0":"X"
        }
        win();
        
    })
})


const buttonsArr = Array.from(buttons)
console.log(buttonsArr);

function win(){
    for (let i = 0; i < winSituations.length; i++) {
        const [a,b,c] = winSituations[i]
        if(gameover===false&&buttonsArr[a - 1].innerText !== "" && 
            buttonsArr[a - 1].innerText === buttonsArr[b - 1].innerText && 
            buttonsArr[a - 1].innerText === buttonsArr[c - 1].innerText){
                gameover=true
                if(gameover==true&&buttonsArr[a - 1].innerText==="X"){

                    document.getElementById('h2-header').textContent="game ends X win"
                    break;

                }else{
                    document.getElementById('h2-header').textContent="game ends 0 win"
                        break;
                }
        }
        
    }
}

function resetTheGame(){
    buttonsArr.map((e)=>e.innerText="")
    document.getElementById('h2-header').textContent="game is running ...."
}
    document.getElementById('reset-btn').addEventListener('click',()=>{
        gameover=false;
        resetTheGame()
        
    })
    



