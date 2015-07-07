var assert = require('chai').assert;
var sinon = require('sinon');

var exec = require('child_process').exec;
var sys = require('sys');

var erb = require('../../lib/erb');

describe('lib/erb', function () {
    describe('#handleCmdOuput', function () {
        it('should throw an error when no ruby file path is specified', sinon.test(function () {
           assert.throws(function () {
               erb.compileTemplate()
           }, 'No config file specified');
        }));

        it('should throw an error when no template file path is specified', sinon.test(function () {
            assert.throws(function () {
                erb.compileTemplate('file.rb')
            }, 'No template specified file specified');
        }));

        it('should throw an error when no destination file path is specified', sinon.test(function () {
            assert.throws(function () {
                erb.compileTemplate('file.rb', 'template.erb')
            }, 'No destination specified');
        }));

        // TODO : add a test when every parameters are correct
    });
});