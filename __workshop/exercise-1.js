// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  firstPromise=new Promise((resolve, reject)=>{
    let bool=array.every(el => (typeof el === "string"));
    if(bool){
      resolve(
        array.map(el=>{
          return el.toUpperCase();
        })
      )
    }
    else{
      reject('not all elements are strings');
    }
  })
  return firstPromise;
};

const sortWords = (array) => {
  // write some code
  secondPromise=new Promise((resolve, reject)=>{
    let bool = array.every(el => (typeof el === "string"));
    if(bool){
      resolve(array.sort());
    }
    else{
      reject('not all elements are strings');
    }
  })
  return secondPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
.then((words) => sortWords(words))
  .then((result) => console.log("first array",result))
  .catch((error) => console.log("first array",error));

makeAllCaps(complicatedArray)
  .then((words) => sortWords(words))
  .then((result) => console.log("second array",result))
  .catch((error) => console.log("second array",error));
