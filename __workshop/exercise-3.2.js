// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: "b17e47ab142a49c5b3303a904ee1487a",
    q: address  ,
  };
return opencage.geocode(requestObj).then((data)=> {
  return data.results[0].geometry});
}
getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };