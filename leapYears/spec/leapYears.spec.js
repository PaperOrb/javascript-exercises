const leapYears = require("../leapYears");

describe("leapYears", function () {
  it("1 works with non century years", function () {
    expect(leapYears(1996)).toEqual(true);
  });
  it("2 works with non century years", function () {
    expect(leapYears(1997)).toEqual(false);
  });
  it("works with ridiculously futuristic non century years", function () {
    expect(leapYears(34992)).toEqual(true);
  });
  it("1 works with century years", function () {
    expect(leapYears(1900)).toEqual(false);
  });
  it("2 works with century years", function () {
    expect(leapYears(1600)).toEqual(true);
  });
  it("3 works with century years", function () {
    expect(leapYears(700)).toEqual(false);
  });
});
