const args = process.argv.slice(2)[0]; // takes single argument;
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, response, body) => {
  if (error) return console.log(error);
  const data = JSON.parse(body);
  if (data.length === 0) return console.log("no cats here 🐁");
  console.log(data[0]["description"]);
});