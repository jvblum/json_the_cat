const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`; // cannot handle 404 message on api // outputs {message: 404 ...}; 
    request(url, (error, response, body) => {
      if (error) return console.log(error);
      const data = JSON.parse(body);
      if (data.length === 0) return callback(null, "no cats here 🐁");
      if (data[0]) if(data[0].description) callback(null, data[0].description); // the checks are for the {message:...} mentioned above;
    });
};

module.exports = fetchBreedDescription;