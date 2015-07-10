"use strict";

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadTasks('tasks');

	grunt.initConfig({
		clean: ['test/fixtures/tmp'],
		nodeunit: {
			tests: ['test/**/*_test.js']
		}
	});

	grunt.registerTask('test', ['clean', 'nodeunit']);
};