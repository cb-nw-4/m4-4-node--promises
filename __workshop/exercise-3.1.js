// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response));
};

getIssPosition()
  .then((result) => {
    let position = {};

    position.lat = Number(result.iss_position.latitude);
    position.lng = Number(result.iss_position.longitude);
    console.log(position)})
  .catch((err) => console.log(err));

module.exports = { getIssPosition };
