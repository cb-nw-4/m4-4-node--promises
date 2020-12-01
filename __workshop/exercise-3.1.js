// Exercise 3.1 - `getIssPosition`
// -----------------------------

const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json") // 1
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
  let position = parsedResponse.iss_position; 
 let lat = position.latitude;
 let lng = position.longitude;
 return {lng, lat};
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  }); 
};

getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };