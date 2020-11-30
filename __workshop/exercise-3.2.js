// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: '90fc9c312ab749a79037e8bafe416d28',
    q: address,
  };
  return opencage
  .geocode(requestObj)
  .then((response) => {
    //console.log(typeof response);
    return response.results[0].geometry;
  })
  .catch((error) => {
    return error.status;
  });
};


getPositionFromAddress('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8').then((response) => console.log(response));
//getPositionFromAddress("John Cleere's").then((response) => console.log(response));
//getPositionFromAddress().then((response) => console.log(response));


