// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
    return request('http://api.open-notify.org/iss-now.json') // 1
      .then((response) => {
        console.log(response)
        return JSON.parse(response); 
      })
      .then((parsedResponse) => {
        return newObj = {'lat': parseFloat(parsedResponse.iss_position.latitude), 'lng': parseFloat(parsedResponse.iss_position.longitude)} ;
      })
      .catch((err) => console.log('Error: ', err));
  
};


module.exports = {getIssPosition};

getIssPosition().then((response) => console.log(response));

