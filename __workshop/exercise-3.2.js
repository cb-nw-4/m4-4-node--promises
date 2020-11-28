// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: 'f3112f853c2d47d6bf22d79fdad588fe',
    q: address
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      // console.log(JSON.stringify(data));
      // console.log(data.results[0].geometry, 'TEST');
      return data.results[0].geometry;
    })
  // console.log(requestObj);
  
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
