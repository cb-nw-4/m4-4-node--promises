// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code

  let isError = false;

  myPromise = new Promise((resolve, reject) =>{

    let newCap = array.map(elem => {
      if(typeof(elem)== 'string'){
        return (elem.toUpperCase()) 
      }else{
        return (isError= true)
      }
  })

  if(! isError){
    resolve( newCap ) }
    else{
      throw new Error('is not string')

  }
  
})
return myPromise;
}

const sortWords = (array) => {
  // write some code

  myPromise = new Promise((resolve, reject) =>{
  resolve(array.sort())
})

return myPromise;
}

sortWords(arrayOfWords)


// Calling (testing)
makeAllCaps(arrayOfWords)
  .then( x => sortWords(x))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error, 'error we try to sort not string'));
