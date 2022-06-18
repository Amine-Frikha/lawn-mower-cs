const { Lawn, Mower } = require('./model');
const { canMove } = require('./utils');

/**Sets Lawn size
 * @param  {string} line a line in the input file
 * @return {object} A Lawn object
 */
const buildLawn = line => {
  const dimensions = line.split(' ');
  return new Lawn(parseInt(dimensions[0]), parseInt(dimensions[1]));
};

/** Sets inital position of mower
 * @param  {string} line a line in the input file
 * @return {object} A Mower object
 */
const initMowerPosition = line => {
  const coordinates = line.split(' ');
  return new Mower(
    parseInt(coordinates[0]),
    parseInt(coordinates[1]),
    coordinates[2],
  );
};

/** Processes a whole line of actions
 * @param  {object} mower
 * @param  {object} lawn
 * @param  {string} line
 */
const processActions = (mower, lawn, line) => {
  line.split('').forEach(action => processAction(mower, lawn, action));
  console.log(
    'Final position of mower : ' + `${mower.x} ${mower.y} ${mower.dir}`,
  );
};

/** Processes a single action
 * @param  {object} mower
 * @param  {object} lawn
 * @param  {string} action
 * @return {object} A Mower object
 */
const processAction = (mower, lawn, action) => {
  switch (action) {
    // F is listed first for optimization purposes: it's usually the most frequent action
    case 'F':
      if (canMove(mower, lawn)) {
        mower.moveForward();
      } else {
        console.log('Cannot move. Mower has reached the edges of the lawn.');
      }
      break;
    case 'L':
      mower.moveLeft();
      break;
    case 'R':
      mower.moveRight();
      break;
    default:
      throw new Error("Unknown action '" + action + "'");
  }
};

module.exports = { processActions, buildLawn, initMowerPosition };
