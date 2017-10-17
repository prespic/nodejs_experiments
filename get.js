var http = require('http');
var Env = require("./environment")

var options = {
    hostname: Env.address,
    port: Env.port,
    path: '/count/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': 0
    }
};

var req = http.request(options, function (res) {
    console.log('STATUS:', res.statusCode);
    console.log('HEADERS:', JSON.stringify(res.headers));

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
        console.log('BODY:', chunk);
    });

    res.on('end', function () {
        console.log('No more data in response.');
        process.exit(0);
    });
});

req.on('error', function (e) {
    console.log('Problem with request:', e.message);
});

req.end();
    
    