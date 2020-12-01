// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => {
      return parsedResponse = JSON.parse(response);
    })
    .then((parsedResponse) => {
      return parsedResponse.data; // 2
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
  };

// a few error examples  
greeting('zz').then((result) => console.log(result));
greeting('ac').then((result) => console.log(result));
greeting('jr').then((result) => console.log(result));