const leapYears = function (year) {
  // leap years are years divisible by 4 starting from 0 AD
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && !(year % 400 === 0)) return false;
  return true;
};

module.exports = leapYears;
