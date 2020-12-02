// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const { geocode } = require('opencage-api-client');
const opencage = require('opencage-api-client');
require('dotenv').config({path: '../.env'});

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  // return something...
  return opencage
  .geocode(requestObj)
  .then((data) =>{
    return data.results[0].geometry
  })
};

getPositionFromAddress(
  '1445 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };
