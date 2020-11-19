"use strict";
function setMineNegsCount(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var cell = board[i][j];
      cell.minesAroundCount = negsCount(board, i, j);
    }
  }
  return board;
}

function negsCount(board, rowIdx, colIdx) {
  var count = 0;
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    if (!(i < 0 || i > board.length - 1)) {
      for (var j = colIdx - 1; j <= colIdx + 1; j++) {
        if (!((i === rowIdx && j === colIdx) || j < 0 || j > board.length - 1)){
        var cell = board[i][j];
        if (cell.isMine) count++;
        }
      }
    }
  }
  return count;
}
