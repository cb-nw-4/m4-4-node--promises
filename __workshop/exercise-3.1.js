// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request("http://api.open-notify.org/iss-now.json")
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      let parsedArr = Object.entries(parsedResponse.iss_position).map(el => {return parseFloat(el[1])})
      let newObj = {};
      newObj["lat"] = parsedArr[0];
      newObj["lng"] = parsedArr[1];
      return newObj;
      
    })
    .catch((err) => {
      return err;
    });
};

// getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };
