// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
const request = require("request");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  return opencage
    .geocode(requestObj)
    .then((data) => {
      return data.results[0].geometry;
    })
    .catch((err) => {
      return err;
    });
};

// getPositionFromAddress(
//   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
// ).then((response) => console.dir(response, { depth: null }));

module.exports = { getPositionFromAddress };
