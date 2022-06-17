const { Mower } = require('./model');
const { moveX, moveY, toLeft, toRight, canMove } = require('./utils');

const moveLeft = mower => new Mower(mower.x, mower.y, toLeft[mower.dir]);
const moveRight = mower => new Mower(mower.x, mower.y, toRight[mower.dir]);

const move = mower =>
  new Mower(moveX[mower.dir] + mower.x, moveY[mower.dir] + mower.y, mower.dir);

const moveForward = (mower, lawn) =>
  canMove(mower.x, mower.y, lawn.x, lawn.y, mower.dir) ? move(mower) : mower;

  module.exports = { move, moveForward, moveLeft, moveRight };
