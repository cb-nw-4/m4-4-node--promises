// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
    
    let promise = new Promise((resolve, reject) => {
      let capArray = array.map((item) => {
        return item.toUpperCase()
      });

      if (capArray.every(item => item.toUpperCase())) {
        resolve(capArray);
      } else {
        reject(error);
      }
    })
    return promise;
};

const sortWords = (array) => {

  let sortedArray = array.sort()
  
  return sortedArray;

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
