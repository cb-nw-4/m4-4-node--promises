// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  const isAllStr = array.every((element) => {
    return typeof element === 'string';
  })
  myPromise1 = new Promise((resolve, reject) => {
    if (isAllStr) {
      const makeCapsArr = array.map((element) => {
        return element.toUpperCase();
      })
      resolve(makeCapsArr);
    }
    else {
      reject('This array contains something other than strings');
    }
  });
  return myPromise1;
};

const sortWords = (array) => {
  myPromise2 = new Promise((resolve, reject) => {
      resolve(array.sort());
  });
  return myPromise2;
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
