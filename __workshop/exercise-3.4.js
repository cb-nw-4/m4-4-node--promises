// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
const { getIssPosition } = require('./exercise-3.1');
const { getPositionFromAddress } = require('./exercise-3.2');

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  let position1;
  return getPositionFromAddress(address)
    .then((positionOfAddress) => {
      position1 = positionOfAddress;
    })
    .then(() => {
      return getIssPosition()
    })
    .then((position2) => {
      return getDistance(position1, position2)
    })
    .catch((err) => console.log(err));
}

//testing
getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((result) => console.log(result))
.catch((error) => console.log(error));
