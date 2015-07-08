var assert = require('chai').assert,
	string = require('../../tasks/util/string');

describe('util/string', function () {
	describe('#isEmpty', function () {
		it('should return true', function () {
			assert.isTrue(string.isEmpty());
			assert.isTrue(string.isEmpty(''));
			assert.isTrue(string.isEmpty('       '));
		});
		it('should return false', function () {
			assert.isFalse(string.isEmpty('myString'));
		});
	});
});