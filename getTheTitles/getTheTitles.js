const getTheTitles = function (booksArr) {
  let titlesArr = [];
  booksArr.forEach(function (book) {
    titlesArr.push(book.title);
  });
  return titlesArr;
};

module.exports = getTheTitles;
