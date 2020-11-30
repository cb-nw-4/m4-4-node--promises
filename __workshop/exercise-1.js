// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    let badData = false;
    array.forEach(word => {
      if (typeof(word) !== 'string') {
        badData = true;
      }
    })

    if (!badData) {
      resolve(array.map(word => (word.toUpperCase())));
    } else {
      reject('Array contains non-string values');
    }
  });

  return myPromise;
};

const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    resolve(array.sort());
  });

  return myPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then((words) => sortWords(words))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then((words) => sortWords(words))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
