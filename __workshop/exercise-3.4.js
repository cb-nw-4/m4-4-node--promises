// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getPositionFromAddress } = require('./exercise-3.2'); // { lat: 45.497118, lng: -73.579044 }
const { getIssPosition } = require('./exercise-3.1'); // { lat: '4.4549', lng: '-111.2426' }

const getDistanceFromIss = (address) => {
  // write a new Promise here...
  let pos1;

  return getPositionFromAddress(address)
    .then((addressPosition)=>{
      pos1 = addressPosition;
    })
    .then(()=> getIssPosition())
    .then((pos2)=> getDistance(pos1, pos2))
};

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

getDistanceFromIss(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
)
.then((result) => console.log("distance:" + result))
.catch((error) => console.log(error));