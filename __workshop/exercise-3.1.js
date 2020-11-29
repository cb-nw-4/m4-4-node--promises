// Exercise 3.1 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

// require the 'request-promise' module.

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
  .then((response) => {
    return parsedResponse = JSON.parse(response);
  })
  .then((parsedResponse) => {
    let newObject = {};
    newObject.lat = parsedResponse.iss_position.latitude;
    newObject.lng = parsedResponse.iss_position.longitude;
    return newObject;
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  })
};

getIssPosition().then((result) => console.log(result));
