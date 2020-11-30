// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${address}`
  }
  return opencage
    .geocode(requestObj)
    .then((data) => data.results[0].geometry)
    .catch((error) => error);
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
getPositionFromAddress(
  '71 White Mountain Dr, Campton, NH 03223'
).then((response) => console.log(response));
getPositionFromAddress(
  '93 Rue de Lille, 75007 Paris, France'
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };