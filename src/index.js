const fs = require('fs-extra');
const { processActions, buildLawn, initMowerPosition } = require('./engine');
const { dimensionsChecker, coordinatesChecker } = require('./inputChecker');

let lawn, mower;

// getting input file as an argument
fs.readFile(process.argv[2])
  .then(data =>
    data
      .toString()
      .split(/\r?\n/) // this is a univeral line split for all os including windows and macOS
      .forEach((line, index, _) => {
        if (index == 0) {
          if (dimensionsChecker(line)) {
            lawn = buildLawn(line);
          } else {
            throw new Error('Invalid dimensions : ' + line);
          }
        } else if (index % 2 == 1) {
          if (coordinatesChecker(lawn, line)) {
            mower = initMowerPosition(line);
          } else {
            throw new Error('initial position outside of lawn : ' + line);
          }
        } else {
          processActions(mower, lawn, line);
        }
      }),
  )
  .catch(err => console.error(err));
