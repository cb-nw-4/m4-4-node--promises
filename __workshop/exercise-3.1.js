// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  return request(`http://api.open-notify.org/iss-now.json`)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      let position = {
        lat: parseFloat(parsedResponse.iss_position.latitude),
        lng: parseFloat(parsedResponse.iss_position.longitude),
      };
      return position;
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

module.exports = { getIssPosition };

//  getIssPosition().then((position) => console.log(`The ISS position is:`,position));
