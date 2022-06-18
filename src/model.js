const { toRight, toLeft, moveX, moveY } = require("./utils");
class Lawn {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Mower {
  constructor(x, y, dir) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.dir = dir;
  }
  moveRight() {
    this.dir = toRight[this.dir];
  }
  moveLeft() {
    this.dir = toLeft[this.dir];
  }
  moveForward() {
    this.x = moveX[this.dir] + parseInt(this.x);
    this.y = moveY[this.dir] + parseInt(this.y);
  }
}
module.exports = { Mower, Lawn };
