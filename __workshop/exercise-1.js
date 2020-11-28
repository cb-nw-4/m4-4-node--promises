// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => { 
   mypromise = new Promise((resolve, reject) => {
      const allCapArr = array.map((word) => {
        if (!(typeof word === 'string' || word instanceof String))
          reject('All element in the array should be a string!, error!');       
        return word.toUpperCase();
      });
   
      resolve(allCapArr);    
   });

   return mypromise;
};

const sortWords = (array) => {
   mypromise = new Promise((resolve, reject) => {
      if (!array.every((word) =>(typeof word === 'string' || word instanceof String)))
        reject('All element in the array should be a string!, error!');

      let sortedArr = array.sort(function(a,b){
        if(a.toLowerCase() < b.toLowerCase()) { return -1; }
        if(a.toLowerCase() > b.toLowerCase()) { return 1; }
        return 0;
      });     
 
    resolve(sortedArr);
   });
   return mypromise;
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
