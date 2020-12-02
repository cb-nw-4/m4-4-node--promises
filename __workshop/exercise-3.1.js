// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise'); 

// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
  .then((response)=>JSON.parse(response))
  .then((parsedRes)=>
      console.log('lat: '+ parsedRes.iss_position.latitude, 
      'lng: '+ parsedRes.iss_position.longitude))
  .catch((err)=>console.log(err));
};

getIssPosition();
