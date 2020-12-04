// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: `${lat},${lng}`,
    };
    //console.log(requestObj);

    return opencage

        .geocode(requestObj)

    .then((dataFromGeoCode) => {
            //console.log(dataFromGeoCode);
            return dataFromGeoCode.results[0].formatted;
        })
        .catch((error) => {
            console.log("error", error.message);
        });
}

getAddressFromPosition("48.858262", "2.294496").then((response) =>
    console.log(response)
);