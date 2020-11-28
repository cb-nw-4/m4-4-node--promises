// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise')

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request('http://api.open-notify.org/iss-now.json')
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
    let newObj = {}
    newObj['lat'] = parsedResponse.iss_position['longitude']
    newObj['lng'] = parsedResponse.iss_position['latitude']
    return newObj
  })
  .catch((err) => {
    return err
  })
};

getIssPosition().then(((result) => console.log(result)))
