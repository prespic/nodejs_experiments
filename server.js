// Express APP
var express = require('express');
var bodyParser = require('body-parser');
var Env = require('./environment');
var Database = require("./database");
var Fs = require("./fs");

var fs = new Fs();
var database = new Database();
database.initialize();

var app = express();

app.use(bodyParser.json());

app.get('/count/', function(req, res, next) {

    database.getValue().then((value) => {
        req.count = value;
        next();
    });

});

app.get('/count/', function(req, res) {
    res.send('Hello World! Count is ' + req.count);
});


app.post('/track', function(request, response) {

    console.log("Count: " + request.body.count);
    
    fs.log(request.body);
    
    database.getValue().then((value) => {
        var count = request.body.count;
        if (count > 0) {
            value += count;
            database.setValue(value);
        }
        response.send("Actual value: " + value); // echo the result back
    });

});

app.listen(Env.port, Env.address);

console.log("App is up and running! " + Env.address + ":" + Env.port)

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
})
