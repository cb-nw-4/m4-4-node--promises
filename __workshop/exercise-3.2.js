// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();


const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };

  // return something...
  return opencage
  .geocode(requestObj)
  .then((data) => {
    return data.results[0].geometry;
  })
  .catch((error) => {
    return error;
  });
  
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
)
.then((response) => console.dir(response,{depth:null}));

// getPositionFromAddress(
//   '400 Rene Levesque O, Montréal, QC H2Z 1V5'
// )
// .then((response) => console.dir(response,{depth:null}));

// getPositionFromAddress(
//   'Şirinyalı, 1548. Sk. No:2, 07160 Muratpaşa/Antalya, Turkey'
// )
// .then((response) => console.dir(response,{depth:null}));

module.exports = { getPositionFromAddress };

