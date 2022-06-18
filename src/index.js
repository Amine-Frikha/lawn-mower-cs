const fs = require("fs-extra");
const { processActions, setLawnSize, setMowerPosition } = require("./engine");

let lawn, mower;

// getting input file as an argument
fs.readFile(process.argv[2])
  .then((data) =>
    data
      .toString()
      .split(/\r?\n/) // this is a univeral line split for all os including windows and macOS
      .forEach((line, index, _) => {
        if (index == 0) {
          // first line  sets the grid size
          lawn = setLawnSize(line);
        } else if (index % 2 == 1) {
          // sets inital position of each mower
          mower = setMowerPosition(line);
        } else {
          // will perform the actions that are either L, R or F
          processActions(mower, lawn, line);
        }
      })
  )
  .catch((err) => console.error(err));
