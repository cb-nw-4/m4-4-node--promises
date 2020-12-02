// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise1 =  new Promise((resolve, reject) => {
    if (array.every(element => typeof element === "string")){
      resolve(
        array.map((element)=>{
          return element.toUpperCase()
        })
      )
    } else{
      reject("error")
    }
  })
  return myPromise1
};
//every true or false
const sortWords = (array) => {
  myPromise2 =  new Promise((resolve, reject) => {
    if (array.every(element => typeof element === "string")){
      resolve(array.sort())
    } else{
      reject("error")
    }
  })
  return myPromise2
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
