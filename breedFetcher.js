const arg = process.argv.slice(2);
const request = require('request');

const siberian = function () {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, function (error, response, body) {
    const data = JSON.parse(body);
    console.log(data[0].description);

    if (arg === undefined) {
      return "type in your breed";
    }
    if (error) {
      return error;
    }
  })
}
siberian();