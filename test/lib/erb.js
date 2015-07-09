var assert = require('chai').assert,
	sinon = require('sinon'),
	process = require('child_process'),
	erb = require('../../lib/erb');

describe('lib/erb', function () {
	describe('#handleCmdOuput', function () {
		it('should throw an error when no ruby file path is specified', function () {
			assert.throws(function () {
				erb.compileTemplate()
			}, 'No config file specified');
		});

		it('should throw an error when no template file path is specified', function () {
			assert.throws(function () {
				erb.compileTemplate('file.rb')
			}, 'No template specified file specified');
		});

		it('should throw an error when no destination file path is specified', function () {
			assert.throws(function () {
				erb.compileTemplate('file.rb', 'template.erb')
			}, 'No destination specified');
		});

		it('should execute the correct command given valid parameters', sinon.test(function () {
			var execStub = this.stub(process, 'exec');

			erb.compileTemplate('./file.rb', 'template.erb', 'result.js');

			assert.equal(1, execStub.callCount);
			assert.equal("erb -r './file.rb' template.erb > result.js", execStub.firstCall.args[0]);
		}));

	});
});