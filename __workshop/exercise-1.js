// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  let isString = array.every(item => typeof item === "string");
  makeCapsPromise = new Promise((resolve,reject) => {
    if (isString) {
      resolve(array.map(item => item.toUpperCase()));
    } else {
      reject("Error: array contains non-strings.")
    }
  })
  return makeCapsPromise;
};

const sortWords = (array) => {
  sortWordsPromise = new Promise((resolve,reject) =>{
    if(makeCapsPromise) {
      resolve(`Success: [${array.sort()}].`)
    } else {
      reject("Error")
    }
  })
  return sortWordsPromise;
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


