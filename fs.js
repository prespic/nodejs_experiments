const const_path_to_file = 'log.txt';


var fs = require('fs');

class Fs {

    constructor() {}

    log(value) {

        var message = JSON.stringify({
            timestamp: Date.now(),
            value: value
        })

        fs.appendFile(const_path_to_file, '\n' + message, function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

}

module.exports = Fs;
