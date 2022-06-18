const { Lawn, Mower } = require("./model");
const { canMove } = require("./utils");

const setLawnSize = (line) => {
  const positions = line.split(" ");
  return new Lawn(positions[0], positions[1]);
};

const setMowerPosition = (line) => {
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
  console.log(
    "Final position of mower : " +
      `${currentMower.x} ${currentMower.y} ${currentMower.dir}`
  );
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
      if (canMove(mower, lawn)) {
        mower.moveForward();
      } else {
        console.log("Cannot move. Mower has reached the edges of the lawn.");
      }
      return mower;
    default:
      throw new Error("Unknown action '" + action + "'");
  }
};

module.exports = { processActions, setLawnSize, setMowerPosition };
