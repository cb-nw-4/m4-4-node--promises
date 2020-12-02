// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat},${lng}`
  };

  return opencage
    .geocode(requestObj)
    .then((data)=>(data.results[0].formatted))
    .catch((error) => {
       return error.message;
    });
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log("Exercise 3-3:", response)
);

getAddressFromPosition('45.497118', '-73.579044').then((response) =>
  console.log("Exercise 3-3:", response)
);

module.exports = { getAddressFromPosition };