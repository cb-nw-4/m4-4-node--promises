// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key:'90fc9c312ab749a79037e8bafe416d28',
    q: `${lat}, ${lng}`,
  };
  return opencage
  .geocode(requestObj)
  .then((response) => {
    //console.log(requestObj.q)
    //console.log( response);
    return response.results[0].formatted;
  })
  .catch((error) => {
    return error.status;
  });
}

getAddressFromPosition('48.858262', '2.294496').then((response) =>
  console.log(response)
);
