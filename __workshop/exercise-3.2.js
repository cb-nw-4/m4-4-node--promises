// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

const getPositionFromAddress = (address) => {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address,
    };
    //console.log(requestObj);

    return opencage

        .geocode(requestObj)

    .then((dataFromGeoCode) => {
            return dataFromGeoCode.results[0].geometry;
        })
        .catch((error) => {
            console.log("error", error.message);
        });
};

getPositionFromAddress(
    "1194 Rue Osborne, Verdun, QC H4H 1X5"
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };