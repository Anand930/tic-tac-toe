const buttons = document.querySelectorAll("button");

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

buttons.forEach((e) => {
    e.addEventListener('click',()=>{
        if(state==="X"){
            e.innerText="X";
            state="0"
        }else{
            e.innerText="0"
            state="X"
        }
        win();
        
    })
})

const buttonsArr = Array.from(buttons)
console.log(buttonsArr);

function win(){
    for (let i = 0; i < winSituations.length; i++) {
        const [a,b,c] = winSituations[i]
        if(buttonsArr[a - 1].innerText !== "" && 
            buttonsArr[a - 1].innerText === buttonsArr[b - 1].innerText && 
            buttonsArr[a - 1].innerText === buttonsArr[c - 1].innerText){
            console.log("win");
            break;
        }
        
    }
}


    
    



