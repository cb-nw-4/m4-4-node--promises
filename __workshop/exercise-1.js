// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  // write some code
  myArray = new Promise((resolve, reject) => {
    if (array.every(el => typeof el === 'string')) {
      resolve(
        array.map((el) => {
          return el.toUpperCase();
        })
      );
    } else {
      reject("error");
    }
  });
  return myArray;
};

const sortWords = (array) => {
  // write some code
  sortedArray = new Promise ((resolve,reject) => {
    if (array.every(el => typeof el === 'string')) {
      resolve(array.sort())
    } else {
      reject('not all strings')
    }
  })
  return sortedArray
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
