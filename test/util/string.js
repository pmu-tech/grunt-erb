var assert = require('chai').assert;
var sinon = require('sinon');

var string = require('../../util/string');

describe('util/string', function () {
    describe('#isEmpty', function () {
       it('should return true', sinon.test(function () {
           assert(true, string.isEmpty());
           assert(true, string.isEmpty(''));
           assert(true, string.isEmpty('       '));
       }));
    });
});