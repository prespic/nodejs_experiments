
var Env = {
    get address() {
        return process.env.IP || "0.0.0.0";
    },
    get port() {
        return process.env.PORT || 3000;
    },
    get redisPort() {
        return 6379;
    }
};

module.exports = Env;