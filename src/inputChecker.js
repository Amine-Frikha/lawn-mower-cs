/** Checks lawn's dimensions are positive and not both zero
 * @param  {string} line
 * @return {Boolean}
 */
const dimensionsChecker = line => {
  const dimensions = line.split(' ');
  x = parseInt(dimensions[0]);
  y = parseInt(dimensions[1]);
  return x >= 0 && y >= 0 && !(x == 0 && y == 0);
};

/** Checks mower initial coordinates are inside the grid
 * @param  {string} line
 * @return {Boolean}
 */
const coordinatesChecker = (lawn, line) => {
  const coordinates = line.split(' ');
  x = parseInt(coordinates[0]);
  y = parseInt(coordinates[1]);
  return x <= lawn.x && y <= lawn.y;
};
module.exports = { dimensionsChecker, coordinatesChecker };
