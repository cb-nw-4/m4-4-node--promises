// Exercise 3.1 - `getIssPosition`
// -----------------------------

const { get } = require("request-promise");

// require the 'request-promise' module.

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return get('http://api.open-notify.org/iss-now.json')
  .then((response) => {
    return JSON.parse(response);
  })
  .then((parsedResponse) => {
    return parsedResponse.iss_position;
  })
  .then((position) => {
    let obj = {};
    obj.lat = position.latitude;
    obj.lng = position.longitude;
    return obj;
  })
  .catch((err) => console.log('Error: ', err));
};

getIssPosition().then((result) => console.log(result));
