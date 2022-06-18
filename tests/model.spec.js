const { Lawn, Mower } = require("../src/model");

describe("Model", () => {
  it("should create a Lawn", () => {
    const lawn = new Lawn(8, 20);
    expect(lawn.x).toBe(8);
    expect(lawn.y).toBe(20);
  });

  it("should create a Mower", () => {
    const mower = new Mower(8, 20, "W");
    expect(mower.x).toBe(8);
    expect(mower.y).toBe(20);
    expect(mower.dir).toBe("W");
  });
});
