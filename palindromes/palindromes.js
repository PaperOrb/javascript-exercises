const palindromes = function (oldStr) {
  let charArr = oldStr.split("");
  let newStrArr = [];

  charArr.forEach((e) => {
    // pushes if e is a letter
    if (e.toLowerCase() !== e.toUpperCase()) {
      newStrArr.push(e.toLowerCase());
    }
  });

  reversedStr = newStrArr.slice().reverse().toString(); //slice duplicates it so reverse doesn't mutate the original
  unreversedStr = newStrArr.toString();

  return reversedStr === unreversedStr ? true : false;
};

module.exports = palindromes;
