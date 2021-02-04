// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {  key: process.env.OPENCAGE_API_KEY,
  q: address}
  // write some code...
  return opencage
  .geocode(requestObj)
  .then((data) => {
    
    //console.dir(JSON.stringify(data), {depth: null})
    if (data.status.code == 200) {
      if (data.results.length > 0) {
        var place = data.results[0];
          return(place.geometry);
  
      }}
      else {
        console.log('error', data.status.message);
    }
  })
  .catch((error) => {
    console.log('error', error.message);
  });
};

module.exports = {getPositionFromAddress};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));


