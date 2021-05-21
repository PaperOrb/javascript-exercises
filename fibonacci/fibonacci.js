const fibonacci = function (num) {
  let sanitizedNum = Number(num);
  let arr = [1, 1];
  if (sanitizedNum < 1) return "OOPS";

  if (1 > num - 2) return 1;
  for (let i = sanitizedNum - 2; i !== 0; --i) {
    let lastEle = arr[arr.length - 1];
    let secToLastEle = arr[arr.length - 2];
    arr.push(lastEle + secToLastEle);
  }

  return arr[arr.length - 1];
};

module.exports = fibonacci;
