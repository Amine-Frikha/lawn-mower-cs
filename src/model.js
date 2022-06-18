const { toRight, toLeft, moveX, moveY } = require("./utils");

class Lawn {
  /** Creates a grid with the params as dimensions
   * @param  {number} x
   * @param  {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Mower {
  /** Creates a Mower object with its coordinates
   * @param  {} x x coordinate
   * @param  {} y y coordinate
   * @param  {} dir direction
   */
  constructor(x, y, dir) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.dir = dir;
  }
  /** Moves mower to the right
   */
  moveRight() {
    this.dir = toRight[this.dir];
  }
  /** Moves mower to the left
   */
  moveLeft() {
    this.dir = toLeft[this.dir];
  }
  /** Moves mower forward
   */
  moveForward() {
    this.x = moveX[this.dir] + parseInt(this.x);
    this.y = moveY[this.dir] + parseInt(this.y);
  }
}
module.exports = { Mower, Lawn };
