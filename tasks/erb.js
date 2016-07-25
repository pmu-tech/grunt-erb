var ERB = require('./lib/erb'),
	path = require('path');

module.exports = function (grunt) {

	var description = "Wrapper around the erb command line";

	grunt.registerMultiTask('erb', description, function () {
		var done = this.async();
		var promises = [];

		this.files.forEach(function (file) {
			var src = file.src;
			var rubyFile = file.rubyFile;
			var dest = file.dest;
			var destFolder = path.dirname(dest);

			if (src.length === 0) {
				grunt.fail.fatal('No src path specified');
			} else if (!rubyFile) {
				grunt.fail.fatal('No ruby file specified');
			} else if (!dest) {
				grunt.fail.fatal('No dest path specified');
			} else {
				grunt.file.mkdir(destFolder);

				src.forEach(function (srcPath) {
					grunt.log.write('Compiling ' + srcPath + ' using config file ' + rubyFile + ' into ' + dest + '\n');

					var promise = ERB.compileTemplate(rubyFile, srcPath, dest)
						.catch(function (e) {
							grunt.fail.fatal('Error while compilation. srcPath: ' + srcPath + ', ruby file: ' + rubyFile + ', destFile: ' + dest + '\n' + e);
						});

					promises.push(promise);
				});
			}
		});


		Promise.all(promises).then(function () {
			done();
		});
	});

};
