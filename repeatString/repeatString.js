const repeatString = function(word, qty) {
  if (qty <= -1) return 'ERROR';
  return word.repeat(qty);
}

module.exports = repeatString
