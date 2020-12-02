// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  let myPromise = new Promise((resolve, reject) => {
    let newArray = array.filter((word) => typeof word === "string");
    if (array.length === newArray.length && newArray.length > 0)
      resolve(array.map((word) => word.toUpperCase()));
    else reject(array, "Array is too small or has invalid elements");
  });
  return myPromise;
};

const sortWords = (array) => {
  let myPromise = new Promise((resolve, reject) => {
    resolve(array.sort());
  });
  return myPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(`Array has been capitalized and sorted alphabetically`, result))
  .catch((error) =>
    console.log(`Array contains one or more invalid entries`, error)
  );

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(`Array has been capitalized and sorted alphabetically`, result))
  .catch((error) =>
    console.log(`Array contains one or more invalid entries`, error)
  );

//
