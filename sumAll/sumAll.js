const sumAll = function (a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return "ERROR"; // guard against NaN
  if (a < 0 || b < 0) return "ERROR"; // guard against negative

  let largestNum = a > b ? a : b; // tracks largest num
  let smallestNum = a !== largestNum ? a : b; // tracks smallest num
  let total = 0; // accumulator

  for (let currentNum = largestNum; currentNum >= smallestNum; --currentNum) {
    total += currentNum;
  }

  return total;
};

module.exports = sumAll;
