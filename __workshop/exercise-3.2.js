// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config({ path: '../.env' });

const address1 = '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8';
const address2 = '1550 Grosvenor Street, Oakville, Ontario, L6H 2Z1';
const address3 = '1011 Upper Middle Road East, Oakville, Ontario, L6H 4L4';

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
  myPromise = opencage
    .geocode({ q: address })
    .then((data) => data);

  return myPromise;
}

getPositionFromAddress(address3)
  .then((response) => {
    for (let i = 0; i < Number(response.total_results); i++) {
      console.log(response.results[i].geometry)
    }
  })
  .catch((error) => console.log(error));

module.exports = { getPositionFromAddress };
