// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config({ path: '../.env'});

function getAddressFromPosition(lat, lng) {
  promise = opencage
    .geocode({ q: lat + ',' + lng })
    .then((data) => data);

  return promise;
}

getAddressFromPosition('48.8584', '2.2945')
  .then((response) => {
    for (let i = 0; i < Number(response.total_results); i++) {
      console.log(response.results[i].formatted)
    }
  })
  .catch((error) => console.log(error));
