const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {//(errormsg, result) will return either one using the if else below
  if (errorMessage) {//if else case to manage request error
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {//get long and lat from geocode and pass to weather function
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});

// //-- basic api request
// const request = require('request');
//
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(body);//get result of the request in json
//   console.log(JSON.stringify(body, undefined, 2));//use jsonstringyfy to get json object of the result. stringify(resultjson, non_important, spaces between lines)
// });

// //--httprequest
// const request = require('request');
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
//   json: true
// }, (error, response, body) => {
//   console.log(`Address: ${body.results[0].formatted_address}`);
//   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
// });
// //error: show error related to the request. Eg if url does not exist or invalid.
// //response: http packet information
// //body: http request such as the data you see on webpage body that gets data from server
// //body.result[0].obj.arr.obj.arr... to get specific data in the body(request result). Obj is the data you wanna get using the obj-arr branching model.
//
// //eg. {result: [{adddress:[{abc}]}
// // geomatry: {
// //   bounds: {}.
// //   location: {
// //     lat: 123,
// //     lan: 423
// //   },
// //   vector: {...}
// // }]
