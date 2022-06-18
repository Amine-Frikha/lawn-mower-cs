const { Lawn, Mower } = require("./model");
const { canMove } = require("./utils");

const processFirstLine = (line) => {
  const positions = line.split(" ");
  return new Lawn(positions[0], positions[1]);
};

const processMower = (line) => {
  const values = line.split(" ");
  return new Mower(values[0], values[1], values[2]);
};

const processActions = (mower, lawn, line) => {
  let currentMower = mower;
  line
    .split("")
    .forEach(
      (action) => (currentMower = processAction(currentMower, lawn, action))
    );
  console.log(`${currentMower.x} ${currentMower.y} ${currentMower.dir}`);
};

const processAction = (mower, lawn, action) => {
  switch (action) {
    case "L":
      mower.moveLeft();
      return mower;
    case "R":
      mower.moveRight();
      return mower;
    case "F":
      if (canMove(mower.x, mower.y, lawn.x, lawn.y, mower.dir)) {
        mower.moveForward();
        return mower;
      }
    default:
      throw new Error("Unknown action '" + action + "'");
  }
};

module.exports = { processActions, processFirstLine, processMower };
