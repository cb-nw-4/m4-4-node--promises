// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  let position = {};
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      position.lat = parsedResponse.iss_position.latitude;
      position.lng = parsedResponse.iss_position.longitude;
      return position;
    });
};

getIssPosition()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));