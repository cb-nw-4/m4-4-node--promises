// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const opencage = require('opencage-api-client');
require('dotenv').config();
const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  return Promise.all([
   getIssPosition(),
   getPositionFromAddress(address)
  ]).then(([pos1, pos2]) => {
    return getDistance(pos1, pos2)
  })

};

//getDistanceFromIss("John Cleere's").then((response ) => console.log(response))
//getDistanceFromIss("King's Cross").then((response) => console.log(response))