const opencage = require('opencage-api-client');
require('dotenv').config({ path: '../.env' });

const address1 = '2460 Winston Churchill Blvd, Oakville, Ontario, L6H 6J5';
const address2 = '1280 Dundas St W, Oakville, Ontario, L6M 4H9';

const getPositionFromAddress = (address) => {
  myPromise = opencage
    .geocode({ q: address })
    .then((data) => data);

  return myPromise;
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
  return Value * Math.PI / 180;
}

// Euclidian distance between two points
const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistBtwnAddresses = () => {
  myPromise = new Promise ((resolve, reject) => {
    let lat1;
    let lng1;
    let lat2;
    let lng2;

    Promise.all([getPositionFromAddress(address1), getPositionFromAddress(address2)])
      .then((result) => {
        lat1 = result[0].results[0].geometry.lat;
        lng1 = result[0].results[0].geometry.lng;
        lat2 = result[1].results[0].geometry.lat;
        lng2 = result[1].results[0].geometry.lng;
        console.log(lat1);
        console.log(lng1);
        console.log(lat2);
        console.log(lng2);
        resolve(calcCrow(lat1, lng1, lat2, lng2));
      });
  });

  return myPromise;
};

getDistBtwnAddresses()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));