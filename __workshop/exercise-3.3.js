// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  // const requestObj = {
  //   key: '<MY_API_KEY>',
  //   q: '<QUERY_STRING>',
  // };

    const requestObj = {  key: process.env.OPENCAGE_API_KEY,
    q: `${parseFloat(lat)} ${parseFloat(lng)}`}
    // write some code...

    console.log(requestObj)
    
    return opencage
    .geocode(requestObj)
    .then((data) => {
    
      console.dir(JSON.stringify(data), {depth: null})
      if (data.status.code == 200) {
        if (data.results.length > 0) {
          var place = data.results[0];
          return (place.formatted);
  
    
        }}
        else {
          console.log('error', data.status.message);
      }
    })
    .catch((error) => {
      console.log('error', error.message);
    });
  };

  
  module.exports ={getAddressFromPosition};

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);
