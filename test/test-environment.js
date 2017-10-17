var expect = require('chai').expect;
var assert = require('chai').assert;
var Env = require("../environment.js");

describe('Environment', function() {

    it('contains IP', function(done) {

        expect(Env.address.split('.').length).to.equal(4);
        done();
    });
    it('contains app port', function(done) {
        var port Number.parseInt(Env.port);
        expect(port).to.be.above(1024);
        done();
    });
    it('contains redis DB port', function(done) {

        expect(Env.redisPort).to.equal(6379);
        done();
    });

});
