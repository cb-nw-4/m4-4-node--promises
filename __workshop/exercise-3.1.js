// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      let obj = {}; 
      obj.lat = parseFloat(parsedResponse.iss_position.latitude); 
      obj.lng = parseFloat(parsedResponse.iss_position.longitude);
      return obj; // 2
    })
    .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
    });
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };
