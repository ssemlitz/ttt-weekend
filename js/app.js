/*-------------------------------- Constants --------------------------------*/
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.squares')
const messageEl = document.querySelector('#message')
 console.log(squareEls)
 console.log(messageEl)

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
  square.addEventListener('click', handleClick)
})


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

    if (winner === null) {
      return (turn === 1 ? messageEl.textContent = "Player 1's turn!" : messageEl.textContent = "Player 2's turn!")
    } else if (winner === 'T') {
      return messageEl.textContent = 'We have a tie!'
    } else {
      return (winner === 1 ? messageEl.textContent = "Player 1 has won it!" : messageEl.textContent = "Player 2 has won it!") 
    }
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))


  if (board[sqIdx] !== null || winner !== null) {
    return
  } else {
    board[sqIdx] = turn
    turn *= -1
  }
  winner = getWinner()
  render()
}

function getWinner() {
  let foundWinner = null
  
  winningCombos.forEach(combo => {
    if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
      foundWinner = board[combo[0]]
    }
  })
  console.log(foundWinner)
  if (foundWinner) return foundWinner
  if (!board.includes(null)){
    return 'T'
  } else {
    return null
  }
}

// function reset() {
//   init()

}