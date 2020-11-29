// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  let allStrings = 'yes'; 
  array.forEach((element)=> {
    if(typeof element !== "string") {
      allStrings = 'no';
    };
  });
  myPromise = new Promise((res,rej)=> { 
    if(allStrings==='yes') {
      let newArray = [];
      newArray = array.map((element)=>{
        return element.toUpperCase();
      });
      res(newArray);
    } else {
      rej('Array items are not all strings!');
    };
  });
  return myPromise; 
};

const sortWords = (array) => {
  // write some code
  return array.sort(); 
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
