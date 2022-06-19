/** Checks lawn's dimensions are > 0 before parsing input
 * @param  {string} line
 * @return {Array}
 */
const parseLawnInput = line => {
  const dimensions = line.split(' ');
  x = parseInt(dimensions[0]);
  y = parseInt(dimensions[1]);
  if (x > 0 && y > 0 && dimensions.length === 2) {
    return dimensions;
  } else {
    throw new Error('Invalid lawn dimensions : ' + line);
  }
};

/** Checks mower initial coordinates are inside the grid before parsing input
 * @param  {string} line
 * @return {Array}
 */
const parseMowerInput = (lawn, line) => {
  const coordinates = line.split(' ');
  x = parseInt(coordinates[0]);
  y = parseInt(coordinates[1]);
  if (x <= lawn.x && y <= lawn.y && coordinates.length === 3) {
    return coordinates;
  } else {
    throw new Error('initial position outside of lawn : ' + line);
  }
};

/** Parses actions
 * @param  {string} line
 * @return {Array}
 */
const parseActionsInput = line => {
  const actions = line.split('');
  return actions;
};

module.exports = { parseLawnInput, parseMowerInput, parseActionsInput };
