// Exercise 2.3 - Use the error
// ----------------------------

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
        .catch((err) => {
            return err.error ? JSON.parse(err.error) : err;
        });
};

// Testing
greeting("RY").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3