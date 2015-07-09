var string = require('../../tasks/util/string');

exports.string = {
	emptyString: function (test) {
		test.ok(string.isEmpty());
		test.ok(string.isEmpty(''));
		test.ok(string.isEmpty('       '));

		test.done();
	},
	nonEmptyString: function (test) {
		test.ok(!string.isEmpty('myString'));

		test.done();
	}
}