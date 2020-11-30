// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  let IssPositionObject = {};
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      IssPositionObject.lat = parsedResponse.iss_position.latitude;
      IssPositionObject.lng = parsedResponse.iss_position.longitude;
      return IssPositionObject;
    })
    .catch((err) => console.log('Error: ', err));
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };