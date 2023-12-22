// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  const newArr = [...bookList, bookName];
  console.log(newArr);
  return newArr;
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const newArr = bookList.filter((book) => {
    return book !== bookName;
  });
  return newArr;
  // Change code above this line
}
