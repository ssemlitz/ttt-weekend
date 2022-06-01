/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
 console.log(squareEls)
 console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {
  board.forEach((square, index) => {
    if (square === -1) {
      squareEls[index].textContent = 'O'
    } else if (square === 1) {
      squareEls[index].textContent = 'X'
    } else {
      squareEls[index].textContent = null
    }
  });

//   if (winner === null) {
//     if (turn === 1) {
//       messageEl.textContent = 
//   } 
// }