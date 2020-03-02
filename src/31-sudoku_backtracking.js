function printBoard(board) {
  console.log('+-------+-------+-------+')
  for (let i = 0; i < board.length; i ++) {
    let row = '|'
    for (let j = 0; j < board[i].length; j ++) {
      row += ` ${board[i][j]}`
      if ((j+1) % 3 === 0) {
        row += ' |'
      }
    }
    console.log(row)
    if ((i + 1) % 3 === 0) {
      console.log('+-------+-------+-------+')
    }
  }
  console.log('')
}

function _isValid(value, board, row, col) {
  // check column
  for (let i = 0; i < board.length; i ++) {
    if (board[i][col] === value) {
      return false
    }
  }
  // check row
  for (let i = 0; i < board.length; i ++) {
    if (board[row][i] === value) {
      return false
    }
  }
  // check 3x3 box
  const boxRowStart = 3 * Math.floor(row / 3)
  const boxColStart = 3 * Math.floor(col / 3)
  for (let x = boxRowStart; x < boxRowStart + 3; x ++) {
    for (let y = boxColStart; y < boxColStart + 3; y ++) {
      if (board[x][y] === value) {
        return false
      }
    }
  }
  return true
}
function _dfs(board, row, col) {
	if(row === board.length) {
		return true
	}
  if(col === board.length) {
		return _dfs(board, row + 1, 0)
	}
  if(board[row][col] !== '.' ) {
		return _dfs(board, row, col + 1)
	}
	for (let ch = 1; ch <= board.length; ch ++) {
		if (_isValid(ch, board, row, col) ){
      // console.log('is valid = true', ch, row, col)
			board[row][col] = ch;
			if (_dfs(board, row, col + 1) ) {
				return true;
			}
      board[row][col] = '.'
		}	
	}
	return false;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  printBoard(board)
  _dfs(board, 0, 0)
  printBoard(board)
};

const board = [
  [ 5 ,  3 , '.', '.',  7 , '.', '.', '.', '.'],
  [ 6 , '.', '.',  1 ,  9 ,  5 , '.', '.', '.'],
  ['.',  9 ,  8 , '.', '.', '.', '.',  6 , '.'],
  [ 8 , '.', '.', '.',  6 , '.', '.', '.',  3 ],
  [ 4 , '.', '.',  8 , '.',  3 , '.', '.',  1 ],
  [ 7 , '.', '.', '.',  2 , '.', '.', '.',  6 ],
  ['.',  6 , '.', '.', '.', '.',  2 ,  8 , '.'],
  ['.', '.', '.',  4 ,  1 ,  9 , '.', '.',  5 ],
  ['.', '.', '.', '.',  8 , '.', '.',  7 ,  9 ]
]


solveSudoku(board)
