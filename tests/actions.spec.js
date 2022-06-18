const { Lawn, Mower } = require("../src/model");

describe("actions", () => {
  let mower, lawn;

  beforeEach(() => {
    mower = new Mower(1, 1, "N");
    lawn = new Lawn(5, 5);
  });

  it("should move to the left", () => {
    mower.moveLeft();
    expect(mower).toEqual(new Mower(1, 1, "W"));
    ["S", "E", "N"].forEach((expected) => {
      mower.moveLeft();
      expect(mower.dir).toBe(expected);
      return mower;
    });
  });

  it("should move to the right", () => {
    mower.moveRight();
    expect(mower).toEqual(new Mower(1, 1, "E"));
    ["S", "W", "N"].forEach((expected) => {
      mower.moveRight();
      expect(mower.dir).toBe(expected);
      return mower;
    });
  });

  it("should not move when outside the lawn", () => {
    let mower = new Mower(0, 0, "S");
    mower.moveForward();
    expect(mower).toBe(mower);
    mower = new Mower(0, 0, "W");
    mower.moveForward();
    expect(mower).toBe(mower);
    mower = new Mower(5, 5, "N");
    mower.moveForward();
    expect(mower).toBe(mower);
    mower = new Mower(5, 0, "E");
    mower.moveForward();
    expect(mower).toBe(mower);
  });

  it("should move forward", () => {
    mower.moveForward();
    expect(mower).toEqual(new Mower(1, 2, "N"));
    let mower2 = new Mower(3, 3, "E");
    mower2.moveForward();
    expect(mower2).toEqual(new Mower(4, 3, "E"));
    let mower3 = new Mower(3, 3, "W");
    mower3.moveForward();
    expect(mower3).toEqual(new Mower(2, 3, "W"));
    let mower4 = new Mower(3, 3, "S");
    mower4.moveForward();
    expect(mower4).toEqual(new Mower(3, 2, "S"));
  });
});
