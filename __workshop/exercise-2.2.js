// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data; // 2
    })
    .catch((err) => console.log('Error: ', err));
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
greeting('en').then((result) => console.log(result)); // English
greeting('es').then((result) => console.log(result)); // Spanish
greeting('sw').then((result) => console.log(result)); // Swahili
greeting('fi').then((result) => console.log(result)); // Finnish
greeting('ru').then((result) => console.log(result)); // Russian
// 3
