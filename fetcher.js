const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2, 3).join();
const input2 = process.argv.slice(3).join();

console.log(input);

request(input, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.appendFile(input2, ('body:', body), (err) => {
    if (err) throw err;
  });
  
});