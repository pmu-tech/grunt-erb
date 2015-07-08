var sys = require('sys');

function handleCmdOutput(error, stdout, stderr) {
	sys.print('stdout: ' + stdout);
	sys.print('stderr: ' + stderr);

	if (error) {
		sys.print('error: ' + error);
	}
}

module.exports = {
	handleCmdOutput: handleCmdOutput
};