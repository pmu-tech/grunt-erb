var ERB = require('./lib/erb'),
	path = require('path');

module.exports = function (grunt) {

	var description = "Wrapper around the erb command line";

	grunt.registerMultiTask('erb', description, function () {

		this.files.forEach(function (file) {
			var src = file.src;
			var rubyFile = file.rubyFile;
			var dest = file.dest;
			var destFolder = path.dirname(dest);

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

					try{
						ERB.compileTemplate(rubyFile, srcPath, dest);
					} catch(e) {
						grunt.log.error('Error while compilation. srcPath: ' + srcPath + ', config file: ' + rubyFile + ', destFile: ' + dest, e);
					}
				});
			}
		});

	});

};