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
  const promise1 = getPositionFromAddress(address);
  const promise2 = getIssPosition();

  return Promise.all([promise1, promise2]).then((values) => {
    return getDistance(values[0], values[1]);
  })
  .catch((err) => console.log(err));
}

// testing
getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8')
.then((result) => console.log(result))
.catch((error) => console.log(error));
