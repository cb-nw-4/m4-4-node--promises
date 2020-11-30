// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const request = require('request-promise');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage.geocode(requestObj)
  .then((response) => {
    newObject = {};
    newObject.lat = response.results[0].geometry.lat;
    newObject.lng = response.results[0].geometry.lng;
    return newObject;
  })
  .catch((err) => {
    console.log(err);
    return err.error ? JSON.parse(err.error) : err;
  })
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));


