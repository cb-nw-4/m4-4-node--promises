// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

// Returns the current position of the ISS
const request = require("request-promise");

const getIssPosition = () => {
    return request("http://api.open-notify.org/iss-now.json")
        .then((response) => JSON.parse(response))

    .then((parsedResponse) => {
            //console.log(parsedResponse.iss_position);
            return parsedResponse.iss_position;
        })
        .then((issLocationObj) => {
            const replacementKeys = { latitude: "lat", longitude: "lng" };
            let replacedItems = Object.keys(issLocationObj).map((key) => {
                const newKey = replacementKeys[key] || key;
                return {
                    [newKey]: issLocationObj[key],
                };
            });
            const newObject = replacedItems.reduce((a, b) => Object.assign({}, a, b));
            return newObject;
        })

    .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
    });
};

// // Testing
getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition };