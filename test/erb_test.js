var grunt = require('grunt'),
	sinon = require('sinon'),
	path = require('path'),
	ERB = require('../tasks/lib/erb'),
	exec = require('child_process').exec;

var read = function () {
	var filepath = path.join.apply(this, Array.prototype.slice.call(arguments));
	return grunt.util.normalizelf(grunt.file.read(filepath));
};

function executeGruntTestTask (task, cb) {
	exec('grunt --gruntfile gruntfile_test.js ' + task, cb);
}

exports.erb = {
	emptySrcFile: function (test) {
		executeGruntTestTask('erb:emptySrcFile', function (error, stdout, stdin) {
			test.ok(error !== null, 'should raise an error when no src files specified');
			test.done();
		});
	},
	emptyRubyFile: function (test) {
		executeGruntTestTask('erb:emptyRubyfile', function (error, stdout, stdin) {
			test.ok(error !== null, 'should raise an error when no ruby file specified');
			test.done();
		});
	},
	emptyDestPath: function (test) {
		executeGruntTestTask('erb:emptyDestPath', function (error, stdout, stdin) {
			test.ok(error !== null, 'should raise an error when no dest path is specified');
			test.done();
		});
	},
	nonExistingRubyFile: function (test) {
		executeGruntTestTask('erb:nonExistingRubyFile', function (error) {
			test.ok(error !== null, 'should raise an error when a non existing ruby file is specified');
			test.done();
		});
	},
	simpleConf: function (test) {
		executeGruntTestTask('erb:simpleConf', function (error) {
			test.equal(error, null, 'no error should be raised');

			var actual = read('test', 'fixtures', 'tmp', 'config-out.js'),
				expected = read('test', 'fixtures', 'expected', 'config-out.js');

			test.equal(actual, expected);

			test.done();
		});
	},
	nonExistingDestDir: function (test) {
		executeGruntTestTask('erb:nonExistingDestDir', function (error) {
			test.equal(error, null, 'no error should be raised');

			var actual = read('test', 'fixtures', 'tmp', 'new', 'other-conf.js'),
				expected = read('test', 'fixtures', 'expected', 'other-conf.js');

			test.equal(actual, expected);

			test.done();
		});
	}
};