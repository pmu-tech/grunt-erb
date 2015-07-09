var sinon = require('sinon'),
	sys = require('sys'),
	logger = require('../../tasks/util/logger');

exports.logger = {
	sysPrintCalledTwice: function (test) {
		var printStub = sinon.stub(sys, 'print');

		logger.handleCmdOutput('', '', '');

		test.equal(2, printStub.callCount);
		test.equal('stdout: ', printStub.firstCall.args);
		test.equal('stderr: ', printStub.secondCall.args);

		test.done();

		printStub.restore();
	},
	withError: function (test) {
		var printStub = sinon.stub(sys, 'print');

		logger.handleCmdOutput('nope', '', '');

		var calls = printStub.getCalls();

		test.equal(3, printStub.callCount);

		test.equal('stdout: ', calls[0].args);
		test.equal('stderr: ', calls[1].args);
		test.equal('error: nope', calls[2].args);

		test.done();

		printStub.restore();
	}
};