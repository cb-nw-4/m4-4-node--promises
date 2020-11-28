// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse; // 2
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

greeting("frr").then((result) => console.log(result));
