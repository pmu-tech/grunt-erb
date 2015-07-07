var assert = require('chai').assert;
var sinon = require('sinon');

var sys = require('sys');
var logger = require('../../util/logger');

describe('util/logger', function () {
    describe('#handleCmdOutput', function () {
        it('should call sys.print twice', sinon.test(function () {
            var printStub = this.stub(sys, 'print');

            logger.handleCmdOutput('', '', '');

            assert.equal(2, printStub.callCount);
        }));

        it('should call sys.print with appropriate args', sinon.test(function () {
            var printStub = this.stub(sys, 'print');

            logger.handleCmdOutput('', '', '');

            var calls = printStub.getCalls();

            assert.equal('stdout: ', calls[0].args);
            assert.equal('stderr: ', calls[1].args);
        }));

        it('should call sys.print 3 times when there is an error', sinon.test(function () {
            var printStub = this.stub(sys, 'print');

            logger.handleCmdOutput('nope', '', '');

            var calls = printStub.getCalls();

            assert.equal(3, printStub.callCount);

            assert.equal('stdout: ', calls[0].args);
            assert.equal('stderr: ', calls[1].args);
            assert.equal('error: nope', calls[2].args);
        }));
    });
});