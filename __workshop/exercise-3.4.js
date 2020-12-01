// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1");

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  
  return  Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
  
};


const getDistanceFromIss = (address) => {
  // write a new Promise here...

  const p1 = getPositionFromAddress(address);
  const p2 = getIssPosition()

  Promise.all([p1, p2])
    .then(result => getDistance (result[0], result[1]))
    .then(result => console.log("The Distance equal to", result))
    .catch(err => (console.log("Erro", err)))

};

getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
)
