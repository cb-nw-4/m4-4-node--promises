// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise((resolve, reject) => {
    let newArray = [];
    array.forEach(element => {
      if (typeof element != 'string') {
        reject("The array must only contain strings.");
      } else {
        newArray.push(element.toUpperCase());
      }
    });
    resolve(newArray);
  })
  return myPromise;
};


const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    array.forEach(element => {
      if (typeof element != 'string') {
        reject("The array must only contain strings.");
      } 
    });
    let newArray = array.sort();
    resolve(newArray);
  })
  return myPromise;
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
