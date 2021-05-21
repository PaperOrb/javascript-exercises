const caesar = function (str, shift) {
  let sanitizedShift = shift % 26;
  let stringArr = str.split("");
  let shiftedArr = [];
  const shiftIsPositive = sanitizedShift > 0 ? true : false;

  stringArr.forEach(function (e) {
    if (e === "W") debugger;
    if (e.toLowerCase() === e.toUpperCase()) return shiftedArr.push(e); // skips if not a letter

    let charWasUpperCase = e === e.toUpperCase();
    let downcasedCharCode = e.toLowerCase().charCodeAt(0);
    let shiftedCharCode = downcasedCharCode + sanitizedShift;

    // adjust out-of-bounds shiftedCharCodes
    if (!(shiftedCharCode >= 97 && shiftedCharCode <= 122)) {
      shiftedCharCode = shiftIsPositive ? shiftedCharCode - 26 : shiftedCharCode + 26;
      //
    } // wrap forward if positive, else backward if negative

    let shiftedString = String.fromCharCode(shiftedCharCode);
    if (charWasUpperCase) shiftedString = shiftedString.toUpperCase();
    return shiftedArr.push(shiftedString);
  });

  return shiftedArr.join("");
};

module.exports = caesar;