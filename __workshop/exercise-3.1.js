// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      // console.log(parsedResponse);
      return {lat: parseFloat(parsedResponse.iss_position.longitude), lng: parseFloat(parsedResponse.iss_position.latitude) };
    })
};

// Testing
// getIssPosition().then((result) => console.log(result,"result comes from here"));

module.exports = { getIssPosition };
