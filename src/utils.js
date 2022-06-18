// converts direction to left depending on current direction
const toLeft = {
  N: "W",
  S: "E",
  E: "N",
  W: "S",
};

// converts direction to right depending on current direction
const toRight = {
  N: "E",
  S: "W",
  E: "S",
  W: "N",
};

// Says how to move on the x coordiante depending on direction
const moveX = {
  N: 0,
  S: 0,
  E: 1,
  W: -1,
};

// Says how to move on the x coordiante depending on direction
const moveY = {
  N: 1,
  S: -1,
  E: 0,
  W: 0,
};

/**Tests if mower can move. Returns true of mower will be within lawn on the next instruction and false otherwise.
 * @param  {Object} mower
 * @param  {Object} lawn
 * @return {Boolean}
 */
const canMove = (mower, lawn) => {
  switch (mower.dir) {
    case "N":
      return mower.y < lawn.y;
    case "S":
      return mower.y > 0;
    case "E":
      return mower.x < lawn.x;
    case "W":
      return mower.x > 0;
  }
  throw new Error("Unknown direction " + dir);
};

module.exports = { toLeft, toRight, moveX, moveY, canMove };
