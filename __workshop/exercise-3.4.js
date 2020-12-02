// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const { getAddressFromPosition } = require("./exercise-3.3");
const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1");

const getDistance = (pos1, pos2) => {

  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (address) => {
  let myPromise = new Promise((resolve, reject) => {
    let newArray = [];
    let positionYou = getPositionFromAddress(address).then((yourPosition) => {
      getIssPosition().then((issPosition) => {
        newArray = [yourPosition, issPosition];
        resolve(newArray);
      });
    });
  });
  myPromise
    .then((response) => {
      return getDistance(response[0], response[1]);
    })
    .then((distance) => console.log(`This is the distance between them`, distance))
    .catch((error) => {
      console.log("error", error.message);
    });
  return myPromise;
};

//getPositionFromAddress("Vancouver, BC").then((response) => console.log(response));
getDistanceFromIss("Paris, FR").then((response) => console.log(`Your address:`,response[0],`ISS Position:`, response[1]));
//.then((response) => console.log(response));
