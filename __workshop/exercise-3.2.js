// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  return opencage
    .geocode(requestObj)
    .then((data) => (data.results[0].geometry))  
    .catch((error) => {
       return error.message;
    });
    
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log("Exercise 3-2:", response));


getPositionFromAddress(
  '152, 61e avenue Nord, Saint-Joseph-du-lac, QC J0N1M0'
).then((response) => console.log("Exercise 3-2:", response));

getPositionFromAddress(
  '5800 Saint Denis St, Montreal, QC H2S 3L5'
).then((response) => console.log("Exercise 3-2:", response));

module.exports = { getPositionFromAddress };