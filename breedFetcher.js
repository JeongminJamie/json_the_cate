// const arg = process.argv.slice(2);
const request = require("request");

// const breedDescription = function () {
//   request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, function (error, response, body) {
//     const data = JSON.parse(body);
//     console.log(data[0].description);

//     if (arg === undefined) {
//       return "type in your breed";
//     }
//     if (error) {
//       return error;
//     }
//   })
// }
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("breed is not found");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
