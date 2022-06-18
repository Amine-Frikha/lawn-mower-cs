const { Lawn, Mower } = require("../src/model");
const { moveLeft, moveRight, moveForward } = require("../src/actions");

describe("actions", () => {
  let currentMower, lawn;

  beforeEach(() => {
    currentMower = new Mower(1, 1, "N");
    lawn = new Lawn(5, 5);
  });

  it("should move to the left", () => {
    currentMower = moveLeft(currentMower);
    expect(currentMower).toEqual(new Mower(1, 1, "W"));
    ["S", "E", "N"].forEach((expected) => {
      currentMower = moveLeft(currentMower);
      expect(currentMower.dir).toBe(expected);
      return currentMower;
    });
  });

  it("should move to the right", () => {
    currentMower = moveRight(currentMower);
    expect(currentMower).toEqual(new Mower(1, 1, "E"));
    ["S", "W", "N"].forEach((expected) => {
      currentMower = moveRight(currentMower);
      expect(currentMower.dir).toBe(expected);
      return currentMower;
    });
  });

  it("should not move when outside the lawn", () => {
    let currentMower = new Mower(0, 0, "S");
    expect(moveForward(currentMower, lawn)).toBe(currentMower);
    currentMower = new Mower(0, 0, "W");
    expect(moveForward(currentMower, lawn)).toBe(currentMower);
    currentMower = new Mower(5, 5, "N");
    expect(moveForward(currentMower, lawn)).toBe(currentMower);
    currentMower = new Mower(5, 0, "E");
    expect(moveForward(currentMower, lawn)).toBe(currentMower);
  });

  it("should move forward", () => {
    expect(moveForward(currentMower, lawn)).toEqual(new Mower(1, 2, "N"));
    expect(moveForward(new Mower(3, 3, "E"), lawn)).toEqual(
      new Mower(4, 3, "E")
    );
    expect(moveForward(new Mower(3, 3, "W"), lawn)).toEqual(
      new Mower(2, 3, "W")
    );
    expect(moveForward(new Mower(3, 3, "S"), lawn)).toEqual(
      new Mower(3, 2, "S")
    );
  });
});
