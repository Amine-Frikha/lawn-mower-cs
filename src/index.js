const fs = require("fs-extra");
const { processActions, processFirstLine, processMower } = require("./engine");

let lawn, mower;

fs.readFile(process.argv[2])
  .then((data) =>
    data
      .toString()
      .split(/\r?\n/) //this is a univeral split for all os including windows and macos
      .forEach((line, index, _) => {
        if (index == 0) {
          lawn = processFirstLine(line);
        } else if (index % 2 == 1) {
          mower = processMower(line);
        } else {
          processActions(mower, lawn, line);
        }
      })
  )
  .catch((err) => console.error(err));
