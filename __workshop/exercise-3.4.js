// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

// const getDistanceFromIss = (address) => {
//   myPromise = new Promise((resolve, reject) => {

//   })
// };

getIssPosition()
  .then((firstResult) => 
    getPositionFromAddress('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
      .then((secondResult) => console.log(getDistance(firstResult, secondResult)))
);



// getDistance( getIssPosition, getPositionFromAddress )
