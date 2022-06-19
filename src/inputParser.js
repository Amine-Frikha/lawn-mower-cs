/** Checks lawn's dimensions are positive and not both zero
 * @param  {string} line
 * @return {Array}
 */
const parseLawnInput = line => {
  const dimensions = line.split(' ');
  x = parseInt(dimensions[0]);
  y = parseInt(dimensions[1]);
  if (x > 0 && y > 0) {
    return dimensions;
  } else {
    throw new Error('Invalid lawn dimensions : ' + line);
  }
};

/** Checks mower initial coordinates are inside the grid
 * @param  {string} line
 * @return {Array}
 */
const parseMowerInput = (lawn, line) => {
  const coordinates = line.split(' ');
  x = parseInt(coordinates[0]);
  y = parseInt(coordinates[1]);
  if (x <= lawn.x && y <= lawn.y) {
    return coordinates;
  } else {
    throw new Error('initial position outside of lawn : ' + line);
  }
};
/** Checks mower initial coordinates are inside the grid
 * @param  {string} line
 * @return {Array}
 */
const parseActionsInput = line => {
  const actions = line.split('');
  return actions;
};

module.exports = { parseLawnInput, parseMowerInput, parseActionsInput };
