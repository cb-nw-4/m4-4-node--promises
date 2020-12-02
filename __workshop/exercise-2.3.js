// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      //console.log(parsedResponse)
      return parsedResponse.data.text; // 2
    })
    .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
    });
};

greeting('sp').then((result) => console.log(result));

//Error:  StatusCodeError: 404 - "{\"status\":404,\"data\":{\"code\":\"sp\"},\"message\":\"Cannot find that language code\"}"-----before cleanup.

// After cleanup-{
//     status: 404,
//     data: { code: 'sp' },
//     message: 'Cannot find that language code'
// }