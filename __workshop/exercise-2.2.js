// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
    return request("https://journeyedu.herokuapp.com/hello/") // 1
        .then((response) => JSON.parse(response))

    .then((parsedResponse) => {
            if (langCode === parsedResponse.data.code.toLowerCase()) {
                return parsedResponse.data;
            } else {
                return request("https://journeyedu.herokuapp.com/hello/" + langCode);
            }
        })
        .then((response) => JSON.parse(response))
        .then((altResponsive) => altResponsive.data)
        .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("RU").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3