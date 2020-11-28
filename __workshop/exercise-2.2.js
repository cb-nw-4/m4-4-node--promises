// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
    .then((response) => {
      const parsedResponse = JSON.parse(response);
      return parsedResponse;
    })
    .then((parsedResponse) => {
      const result = parsedResponse.data;
      return result;
    })
    .catch((err) => console.log('Error: ', err));
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

