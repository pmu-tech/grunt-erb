var process = require('child_process');

function compileTemplate(rubyFilePath, templateFilePath, destPath) {
	var cmd = "erb -r " + "'" + rubyFilePath + "'" + " " + templateFilePath + " > " + destPath;

	var promise = new Promise(function (resolve, reject) {
		process.exec(cmd, function (error, stdout, stderr) {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});

	return promise;
}

module.exports = {
	compileTemplate: compileTemplate
};
