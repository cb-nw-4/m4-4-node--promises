// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
    return request('http://api.open-notify.org/iss-now.json') // 1
      .then((response) => JSON.parse(response))
      .then((response) => {
        response.iss_position.lng = response.iss_position.longitude;
          delete response.iss_position.longitude;
        response.iss_position.lat = response.iss_position.latitude;
          delete response.iss_position.latitude;
        return response // 2
      })
      .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
      });
};

getIssPosition().then((result) => console.log(result));