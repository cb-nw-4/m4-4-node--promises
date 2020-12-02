// Exercise 3.2 - `getPositionFromAddress`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
  return opencage
    .geocode({ q: address, key: "cdbb04402a5c4f32ae992b19f6b19d41" })
    .then((data) => {
      let parsedData = JSON.parse(JSON.stringify(data));
      return parsedData;
    })
    .then((parsedData) => {
      let location = JSON.parse(JSON.stringify(parsedData.results[0].geometry));
      return location;
    })

    .catch((error) => {
      console.log("error", error.message);
    });
};

module.exports = { getPositionFromAddress };

//  getPositionFromAddress("1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8").then((response) => console.log(response));
// getPositionFromAddress("Quebec City, QC").then((response) => console.log(response));
// getPositionFromAddress("Vancouver, BC").then((response) => console.log(response));
