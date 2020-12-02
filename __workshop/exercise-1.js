// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  let isAllStrings = true;
  return new Promise((resolve, reject)=>{
    array.forEach((item)=> typeof item === 'string'? null: isAllStrings=false);
    if(!isAllStrings){
      reject('Error');
    }else{
      resolve(array.map((word)=> word.toUpperCase()));
    }
  }); 
};

const sortWords = (array) => {
  return new Promise((resolve, reject)=>{
    resolve(array.sort());
    reject('Error');
  });
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
