// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
    return request(`https://journeyedu.herokuapp.com/hello/${langCode}`) // 1
      .then((response) => JSON.parse(response))
      .then((response) => {
        return response.data // 2
      })
      .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
      });
  };
  
// Testing
greeting('it').then((result) => console.log(result)); // { lang: 'Italian', code: 'IT', text: 'Salve' }
greeting('ch').then((result) => console.log(result)); // {status: 404, data: { code: 'ch' }, message: 'Cannot find that language code'}