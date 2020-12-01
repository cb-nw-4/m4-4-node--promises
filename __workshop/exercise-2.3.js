// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// get the code you wrote in 2.2 and paste it here...
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
        .catch((err) => {
            return err.error ? JSON.parse(err.error) : err;
        });
};

// Testing
greeting('jp').then((result) => console.log(result)); //{ status: 404, data: { code: 'jp' }, message: 'Cannot find that language code'}