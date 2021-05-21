const ftoc = function (f) {
  return Number(((f - 32) / 1.8).toFixed(1));
};

const ctof = function (c) {
  return Number((c * 1.8 + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
