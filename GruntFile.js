"use strict";

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-mocha-cli');

	grunt.loadTasks('tasks');

	grunt.initConfig({
		"mochacli": {
			src: 'test/**/*.js'
		},
		erb: {
			configApp: {
				src: './test/samples/config.tpl',
				rubyFile: './test/samples/config.rb',
				dest: './test/samples/output/config-out.js'
			},
			otherConf: {
				src: './test/samples/other-conf.tpl',
				rubyFile: './test/samples/other-conf.rb',
				dest: './test/samples/output/other-conf.js'
			}
		}
	});

	grunt.registerTask('test', ['mochacli']);
};