// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const testGreeting = () => {
  return request('https://journeyedu.herokuapp.com/hello') 
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse; 
    })
    .then((parsedResponse) => {
      const result = parsedResponse.data.text;
      return result; 
    })
    .catch((err) => console.log('Error: ', err));
};

testGreeting().then((result) => console.log(result));
