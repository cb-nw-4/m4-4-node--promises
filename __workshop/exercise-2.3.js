// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
      .then((response) => JSON.parse(response))
      .then((parsedResponse) => {
        return parsedResponse.data; // 2
      })
      .catch((err) => {      
        return err.error ? JSON.parse(err.error) : err;       
      });
  };


  greeting('oo').then((result) => console.log(result));

  /*err return a big object. err.error give us the actual error message that we need, but it's  a Json object as a string (it is stringify).
  We need to parse it to get the actual Json object with the format we want.*/