// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');
// Returns the current position of the ISS
const getIssPosition = () => {
  return request('http://api.open-notify.org/iss-now.json')
  .then((response) => JSON.parse(response))
  .then((parsedResponse)=>{
    let lat=parsedResponse.iss_position.latitude;
    let long=parsedResponse.iss_position.longitude;
    let obj={"lat":lat,"long":long};
    console.log(obj);
    return;
  })
  .catch((error)=>console.log(error));

};

getIssPosition().then((result)=>console.log(result));
