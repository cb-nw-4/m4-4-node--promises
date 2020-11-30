// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

// capitalize words in array and return new array
const makeAllCaps = (array) => {
  let capitalizedWords = [];
  promise1 = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      array.map((word) => capitalizedWords.push(word.toUpperCase()));
      resolve(capitalizedWords);
    } else {
        reject('error!');
      }
    })
  return promise1;
};

// sort words in array in alphabetical order and return new array
const sortWords = (array) => {
  let sortedArray = [];
  promise2 = new Promise((resolve, reject) => {
    if (array.every((word) => typeof word === 'string')) {
      array.map((word) => sortedArray.push(word));
      resolve(sortedArray.sort((a,b) => a - b));
    } else {
      reject('error!');
    }
  })
  return promise2;
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

  // error doesn't work? is it because all else works?