var ERB = require('../lib/erb');

module.exports = function (grunt) {

    var description = "Wrapper around the erb command line";

    grunt.registerMultiTask('erb', description, function () {
        this.files.forEach(function (file) {
            var src = file.src;
            var configFile = file.configFile;
            var dest = file.dest;

            if (src.length === 0) {
                grunt.log.warn('No src path specified');
            } else if (!configFile) {
                grunt.log.warn('No config file specified');
            } else if (!dest) {
                grunt.log.warn('No dest path specified');
            } else {
                src.forEach(function (srcPath) {
                    grunt.log.write('Compiling ' + srcPath + ' using config file ' + configFile + ' into ' + dest);

                    ERB.compileTemplate(configFile, srcPath, dest);
                });
            }
        });
    });

};