"use strict";

const EMPTY = "";
const MINE = '<img class="mine" src="img/poop.jpg"/>';
const FLAG = '<img class="flag" src="img/pooperScooper.jpg"/>';

var board;
var gGame;
var gLevel = {
  SIZE: 0,
  MINES: 0,
};

//step 1
function initGame() {
  var board = buildBoard();
  renderBoard(board);
  //step 1
}

function buildBoard() {
  var board = createMat();
  //later rand mines
  board[1][1].isMine = true;
  board[1][2].isMine = true;
  board[1][1].isShown = true;
  board[1][2].isShown = true;
  board = setMineNegsCount(board);
  return board;
}

function renderBoard() {
  //is it OK that it works directly on gBoard? (yes - but it would help wuth the undo to out the board as a parameter)
  var elBoard = document.querySelector(".board");
  var strHTML = "";
  for (var i = 0; i < gBoard.length; i++) {
    strHTML += "<tr>\n";
    for (var j = 0; j < gBoard[0].length; j++) {
      var currCell = gBoard[i][j];
      var cellClass = getClassName(i, j);
      if (gGame.manualState.isCurrentlySetting) {
        strHTML += `\t<td class="cell ${cellClass} show" onclick="cellClicked(this, ${i}, ${j})">\n`;
        strHTML += "\t</td>\n";
        continue;
      }
      currCell.isMine ? cellClass += " mine" : " not-mine";
      
      strHTML += `\t<td class="cell ${cellClass}" onclick="cellClicked(this, ${i}, ${j})">\n`;
      strHTML += "\t</td>\n";
    }
    strHTML += "</tr>\n";
  }
  elBoard.innerHTML = strHTML;
}

function cellClicked(elCell, i, j) {}

function cellMarked(elCell) {}

function checkGameOver() {}

function expandShown(board, elCell, i, j) {}

function createMat() {
  var mat = [];
  for (var i = 0; i < 4; i++) {
    mat[i] = [];
    for (var j = 0; j < 4; j++) {
      mat[i][j] = createCell();
    }
  }
  return mat;
}

function getClassName(i, j) {
  var cellClass = `cell-${i}-${j}`;
  return cellClass;
}
