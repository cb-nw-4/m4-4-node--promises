// Exercise 1
// ------------
const arrayOfWords = ["Chocolate", "Apple", "Banana"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
    myPromise = new Promise((resolve, reject) => {
        const newArrayIsString = array.every(function(word) {
            return typeof word === "string";
        });
        if (!newArrayIsString) {
            reject("There is an error! The words in the array are not all strings!!");
        }
        const newArray = array.map((word) => {
            return word.toUpperCase(); {}
        });
        resolve(newArray);
    });
    return myPromise;
};

const sortWords = (newArray) => {
    myPromise = new Promise((resolve, reject) => {
        const newArraySort = newArray.sort(function(a, b) {
            if (a > b) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            return 0;
        });
        resolve(newArraySort);
        reject("Error: Something went wrong here");
    });
    return myPromise;
};

makeAllCaps(arrayOfWords)
    .then((newArray) => sortWords(newArray))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
makeAllCaps(complicatedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));