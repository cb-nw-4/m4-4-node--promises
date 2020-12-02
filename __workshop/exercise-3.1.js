// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");
// Returns the current position of the ISS
const getIssPosition = () => {
  return request("http://api.open-notify.org/iss-now.json")
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
    let {longitude, latitude} = parsedResponse.iss_position
    return {
      lng:longitude,
      lat:latitude
    }
})
.catch((err) => {
  return err.error ? JSON.parse(err.error) : err;
});
};

getIssPosition()
  .then((result) => console.log(result));
