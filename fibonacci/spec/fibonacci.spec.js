const fibonacci = require("../fibonacci");

describe("fibonacci", function () {
  it("1 works", function () {
    expect(fibonacci(4)).toEqual(3);
  });
  it("2 works", function () {
    expect(fibonacci(6)).toEqual(8);
  });
  it("3 works", function () {
    expect(fibonacci(10)).toEqual(55);
  });
  it("4 works", function () {
    expect(fibonacci(15)).toEqual(610);
  });
  it("5 works", function () {
    expect(fibonacci(25)).toEqual(75025);
  });
  it("doesn't accept negatives", function () {
    expect(fibonacci(-25)).toEqual("OOPS");
  });
  it("1 DOES accept strings", function () {
    expect(fibonacci("1")).toEqual(1);
  });
  it("2 DOES accept strings", function () {
    expect(fibonacci("2")).toEqual(1);
  });
  it("3 DOES accept strings", function () {
    expect(fibonacci("8")).toEqual(21);
  });
});
