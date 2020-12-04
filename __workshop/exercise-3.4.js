// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------
//const request = require("request-promise");
const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1");
const getDistance = (pos1, pos2) => {
    return Math.sqrt(
        Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
};
const getDistanceFromIss = (address) => {
    return Promise.all([getPositionFromAddress(address), getIssPosition()]).then(
        ([pos1, pos2]) => {
            return getDistance(pos1, pos2);
        }
    );
};

getDistanceFromIss("1194 Rue Osborne, Verdun, QC H4H 1X5").then((response) =>
    console.log(response)
);