// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: "b17e47ab142a49c5b3303a904ee1487a",
    q: `${lat}, ${lng}`,
  };

 return opencage.geocode(requestObj).then((data) => {
   return JSON.stringify(data.results[0].formatted);
 })
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);

module.exports = { getAddressFromPosition };