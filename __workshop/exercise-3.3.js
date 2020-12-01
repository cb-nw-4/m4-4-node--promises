// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: lat, lng,
  };

  // return ...
  return opencage
  .geocode(requestObj)
  .then((data) => {
    let address = data.results[0]
    return address.formatted;
  })
  .catch((err) => console.log('Error: ', err));  
  }

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);
