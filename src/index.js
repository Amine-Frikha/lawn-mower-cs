const fs = require('fs-extra');
const { processActions, buildLawn, initMowerPosition } = require('./engine');
const {
  parseLawnInput,
  parseMowerInput,
  parseActionsInput,
} = require('./inputParser');

let lawn, mower, dimensions, coordinates, actions;

// getting input file as an argument
fs.readFile(process.argv[2])
  .then(data =>
    data
      .toString()
      .split(/\r?\n/) // this is a univeral line split for all os including windows and macOS
      .forEach((line, index, _) => {
        if (index == 0) {
          dimensions = parseLawnInput(line);
          lawn = buildLawn(dimensions);
        } else if (index % 2 == 1) {
          coordinates = parseMowerInput(lawn, line);
          mower = initMowerPosition(coordinates);
        } else {
          actions = parseActionsInput(line);
          processActions(mower, lawn, actions);
          console.log(
            'Final position of mower : ' + `${mower.x} ${mower.y} ${mower.dir}`,
          );
        }
      }),
  )
  .catch(err => console.error(err));
