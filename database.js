const const_counter = 'counter';

var Env = require('./environment');
var redis = require('redis');

class Database {

    constructor() {
        this.m_redisClient = redis.createClient({
            host: Env.address,
            port: Env.redisPort
        });

        this.m_redisClient.on('connect', function() {
            console.log('Database connection is OK.');
        });

        this.m_redisClient.on('error', function() {
            console.log("Error in Redis");
        });
    }

    initialize() {
        this.getValue().catch(() => {
            console.log("initialize counter");
            this.setValue(0);
        });
    }

    setValue(value) {
        this.m_redisClient.set(const_counter, value);

    }

    getValue() {
        return new Promise((resolve, reject) => {

            this.m_redisClient.get(const_counter, function(err, reply) {
                if (err) {
                    console.log('Database error: ' + err);
                    reject();
                    return;
                }
                var result = Number.parseInt(reply, 10);
                if (Number.isNaN(result)) {
                    reject();
                }
                else {
                    resolve(result);
                }
            });

        });
    }


}

module.exports = Database;
