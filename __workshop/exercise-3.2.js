// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config({ path: '../.env' });

const address1 = '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8';
const address2 = '400 Chisholm Drive, Milton, ON L9T 5V6';

// Usage when called from a browser.
// const getPositionFromAddress = (address) => {
//   const requestObj = {
//     key: '<MY_API_KEY>',
//     q: '<QUERY_STRING>',
//   };

//   // return something...
// };

// Usage when called from node
const getPositionFromAddress = (address) => {
  promise = opencage
    .geocode({ q: address })
    .then((data) => data);

  return promise;
}

getPositionFromAddress(address1)
  .then((response) => console.log(response.results[0].geometry))
  .catch((error) => console.log(error));
