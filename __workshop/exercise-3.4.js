// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

// require functions from previous exercises
const { getIssPosition } = require('../__workshop/exercise-3.1');
const { getPositionFromAddress } = require('../__workshop/exercise-3.2');

const address = '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8';

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  myPromise = new Promise ((resolve, reject) => {
    let pos1 = {};
    let pos2 = {};

    Promise.all([getIssPosition(), getPositionFromAddress(address)])
      .then((result) => {
        pos1.lat = Number(result[0].iss_position.latitude);
        pos1.lng = Number(result[0].iss_position.longitude);
        pos2 = result[1].results[0].geometry;
        resolve(getDistance(pos1, pos2));
      });
  });

  return myPromise;
};

getDistanceFromIss(address)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
