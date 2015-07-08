var assert = require('chai').assert;
var string = require('../../util/string');

describe('util/string', function () {
	describe('#isEmpty', function () {
		it('should return true', function () {
			assert(true, string.isEmpty());
			assert(true, string.isEmpty(''));
			assert(true, string.isEmpty('       '));
		});
		it('should return false', function () {
			assert.isFalse(string.isEmpty('myString'));
		});
	});
});