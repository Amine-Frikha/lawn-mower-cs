const fs = require('fs-extra');
const { processActions, processFirstLine, processMower } = require('./engine');

let lawn, mower;

fs.readFile(process.argv[2])
  .then(data =>
    data
      .toString()
      .split('\n')
      .forEach((line, index, arr) => {
        if (index == 0) {
          lawn = processFirstLine(line);
        } else if (index % 2 == 1) {
          mower = processMower(line);
        } else {
          processActions(mower, lawn, line);
        }
      }),
  )
  .catch(err => console.error(err));
