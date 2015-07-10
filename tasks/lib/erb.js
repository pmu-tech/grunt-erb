var process = require('child_process'),
	Promise = require('bluebird'),
	logger = require('../util/logger'),
	string = require('../util/string');

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

	var promise = new Promise(function (resolve, reject) {
		process.exec(cmd, resolve);
	});

	return promise;
}

module.exports = {
	compileTemplate: compileTemplate
};