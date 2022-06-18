const { Lawn, Mower } = require('../src/model');
const { canMove } = require('../src/utils');

describe('actions', () => {
  let mower, lawn, canItMove;

  beforeEach(() => {
    mower = new Mower(1, 1, 'N');
    lawn = new Lawn(5, 5);
  });

  it('should move to the left', () => {
    ['W', 'S', 'E', 'N'].forEach(expectedDir => {
      mower.moveLeft();
      expect(mower).toEqual(new Mower(1, 1, expectedDir));
    });
  });

  it('should move to the right', () => {
    ['E', 'S', 'W', 'N'].forEach(expectedDir => {
      mower.moveRight();
      expect(mower).toEqual(new Mower(1, 1, expectedDir));
    });
  });

  it('should not move when outside the lawn', () => {
    let mower = new Mower(0, 0, 'S');
    expect(canMove(mower, lawn)).toBe(false);
    mower = new Mower(0, 0, 'W');
    expect(canMove(mower, lawn)).toBe(false);
    mower = new Mower(5, 5, 'N');
    expect(canMove(mower, lawn)).toBe(false);
    mower = new Mower(5, 0, 'E');
    expect(canMove(mower, lawn)).toBe(false);
  });

  it('should move forward', () => {
    mower.moveForward();
    expect(mower).toEqual(new Mower(1, 2, 'N'));
    mower = new Mower(3, 3, 'E');
    mower.moveForward();
    expect(mower).toEqual(new Mower(4, 3, 'E'));
    mower = new Mower(3, 3, 'W');
    mower.moveForward();
    expect(mower).toEqual(new Mower(2, 3, 'W'));
    mower = new Mower(3, 3, 'S');
    mower.moveForward();
    expect(mower).toEqual(new Mower(3, 2, 'S'));
  });
});
