// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse)=> ({lng: parseFloat(parsedResponse.iss_position.longitude), lat: parseFloat(parsedResponse.iss_position.latitude)}))
    .catch((err) => err);  
};

getIssPosition().then((result) => console.log("Exercise 3-1:", result));

module.exports = { getIssPosition };