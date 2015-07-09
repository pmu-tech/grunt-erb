"use strict";

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.loadTasks('tasks');

	grunt.initConfig({
		erb: {
			simpleConf: {
				src: './test/fixtures/src/config.tpl',
				rubyFile: './test/fixtures/src/config.rb',
				dest: './test/fixtures/tmp/config-out.js'
			},
			nonExistingDestDir: {
				src: './test/fixtures/src/other-conf.tpl',
				rubyFile: './test/fixtures/src/other-conf.rb',
				dest: './test/fixtures/tmp/new/other-conf.js'
			}
		},
		nodeunit: {
			tests: ['test/**/*_test.js']
		}
	});

	grunt.registerTask('test', ['nodeunit']);
};