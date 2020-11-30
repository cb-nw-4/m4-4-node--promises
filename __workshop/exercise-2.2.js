// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request('https://journeyedu.herokuapp.com/hello/' + langCode)
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data;
    })
};

// Testing
greeting('fr')
  .then((result) => console.log(result)) // { lang: "French", code: "FR", text: "Bonjour" }
  .catch((err) => console.log('Error: ', err));
  