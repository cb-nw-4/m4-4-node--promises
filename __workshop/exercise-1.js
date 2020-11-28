// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    if (array.every((item) => typeof item === "string")) {
      const capitalized = array.map((e) => e.toUpperCase());
      resolve(capitalized);
    } else {
      reject(`error`);;
    }
  });
  return myPromise;
};

const sortWords = (array) => {
  // write some code
  prom = new Promise((resolve, reject) => {
    if (array.every((item) => typeof item === "string")) {
      const sorted = array.sort();
      resolve(sorted);
    } else {
      reject(`error`);;
    }
  });
  return prom;
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
