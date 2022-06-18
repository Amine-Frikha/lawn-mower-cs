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

const canMove = (x, y, xMax, yMax, dir) => {
  switch (dir) {
    case "N":
      return y < yMax;
    case "S":
      return y > 0;
    case "E":
      return x < xMax;
    case "W":
      return x > 0;
  }
  throw new Error("Unknown direction " + dir);
};

module.exports = { toLeft, toRight, moveX, moveY, canMove };
