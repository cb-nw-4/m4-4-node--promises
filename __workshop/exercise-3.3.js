// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const { geocode } = require('opencage-api-client');
const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: '51ed2a8b0e4c437f9d8941eda6619cba',
    q: lat+ " " + lng,
  };

  // return ...
  return opencage
  .geocode(requestObj)
  .then((data)=>data.results[0].formatted)
  .catch((err)=>err.message);
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  //console.dir(response,{depth:null})
  console.log(response)
);
