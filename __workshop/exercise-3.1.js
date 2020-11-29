// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse;
    })
    .then((parsedResponse) => {
      let result = {lat: parsedResponse.iss_position.latitude, lng: parsedResponse.iss_position.longitude};
      return result;
    })
    .catch((err) => console.log('Error: ', err));
};

//Testing
getIssPosition().then((result) => console.log(result)); 
