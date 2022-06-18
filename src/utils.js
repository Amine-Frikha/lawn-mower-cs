const toLeft = {
  N: "W",
  S: "E",
  E: "N",
  W: "S",
};

const toRight = {
  N: "E",
  S: "W",
  E: "S",
  W: "N",
};

const moveX = {
  N: 0,
  S: 0,
  E: 1,
  W: -1,
};

const moveY = {
  N: 1,
  S: -1,
  E: 0,
  W: 0,
};

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
