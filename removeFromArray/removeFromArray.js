const removeFromArray = function(arr, ...args) {
  var newArray = arr;
  args.forEach(function(itemToRemove) {
    newArray = newArray.filter(arrItem => arrItem !== itemToRemove);
  });
  return newArray;
};

removeFromArray([1], 1)

module.exports = removeFromArray
