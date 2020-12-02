// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');
// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then((response) => JSON.parse(response))
  .then((parsedResponse)=>{
    let lat=parseFloat(parsedResponse.iss_position.latitude);
    let lng=parseFloat(parsedResponse.iss_position.longitude);
    let obj={"lat":lat,"lng":lng};
    return obj;
  })
  .catch((error)=>console.log(error));

};

getIssPosition().then((result)=>console.log(result));

module.exports = { getIssPosition };
