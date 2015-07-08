var ERB = require('../lib/erb'),
	Path = require('path');

module.exports = function (grunt) {

	var description = "Wrapper around the erb command line";

	grunt.registerMultiTask('erb', description, function () {
		this.files.forEach(function (file) {
			var src = file.src;
			var rubyFile = file.rubyFile;
			var dest = file.dest;
			var destFolder = Path.dirname(dest);

			if (src.length === 0) {
				grunt.log.warn('No src path specified');
			} else if (!rubyFile) {
				grunt.log.warn('No config file specified');
			} else if (!dest) {
				grunt.log.warn('No dest path specified');
			} else {
				grunt.file.mkdir(destFolder);

				src.forEach(function (srcPath) {
					grunt.log.write('Compiling ' + srcPath + ' using config file ' + rubyFile + ' into ' + dest);

					// TODO : link errors raised by erb command to grunt.log
					ERB.compileTemplate(rubyFile, srcPath, dest);
				});
			}
		});
	});

};