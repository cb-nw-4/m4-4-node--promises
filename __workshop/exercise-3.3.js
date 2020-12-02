// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getAddressFromPosition = (long, lat) => {
  return opencage
    .geocode({ q: `${long},${lat}`, key: "cdbb04402a5c4f32ae992b19f6b19d41" })
    .then((data) => {
      let parsedData = JSON.parse(JSON.stringify(data));
      return parsedData;
    })
    .then((parsedData) => {
      let location = JSON.parse(
        JSON.stringify(parsedData.results[0].formatted)
      );

      return location;
    })

    .catch((error) => {
      console.log("error", error.message);
    });
};

// getAddressFromPosition("48.8584", "2.2945").then((response) =>
//   console.log(response)
// );

module.exports = { getAddressFromPosition };
