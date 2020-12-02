// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: '51ed2a8b0e4c437f9d8941eda6619cba',
    q: address,
  };

  // return something...
  return opencage
  .geocode(requestObj)
  .then((data)=>data.results[0].geometry)
  .catch((error)=>error.message);
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));


/*console.dir(response,{depth:null}));*/
