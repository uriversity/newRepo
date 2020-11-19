"use strict";

function createCell() {
    var cell = {
      minesAroundCount: 0,
      isShown: false,
      isMine: false,
      isMarked: false,
    };
    return cell;
  }