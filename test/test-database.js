var expect = require('chai').expect;
var Database = require("../database.js");

describe('Database', function() {
   
    it('is able to store number', function(done) {
        var db = new Database();
        
        db.setValue(123);
        db.getValue().then(result => {

            expect(result).to.equal(123);
            done();
        });
    });
    
});
