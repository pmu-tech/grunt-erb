var sinon = require('sinon'),
	process = require('child_process'),
	erb = require('../../tasks/lib/erb');

exports.erb = {
	withValidParams: function (test) {
		var execStub = sinon.stub(process, 'exec');

		erb.compileTemplate('./file.rb', 'template.erb', 'result.js');

		test.equal(1, execStub.callCount);
		test.equal("erb -r './file.rb' template.erb > result.js", execStub.firstCall.args[0]);

		test.done();
	}
};