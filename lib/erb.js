var process = require('child_process');

var logger = require('../util/logger');
var string = require('../util/string');

function compileTemplate(rubyFilePath, templateFilePath, destPath) {
	// Security problem ? Hum I think yes
	if (string.isEmpty(rubyFilePath)) {
		throw "No config file specified";
	}

	if (string.isEmpty(templateFilePath)) {
		throw "No template specified file specified";
	}

	if (string.isEmpty(destPath)) {
		throw "No destination specified";
	}

	var cmd = "erb -r " + "'" + rubyFilePath + "'" + " " + templateFilePath + " > " + destPath;

	var child = process.exec(cmd, logger.handleCmdOutput);
}

module.exports = {
	compileTemplate: compileTemplate
};