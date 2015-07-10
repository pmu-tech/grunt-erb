"use strict";

module.exports = function (grunt) {
	grunt.loadTasks('tasks');

	grunt.initConfig({
		erb: {
			emptySrcFile: {
				src: '',
				rubyFile: './test/fixtures/src/config.rb',
				dest: './test/fixtures/tmp/config.js'
			},
			emptyRubyFile: {
				src: './test/fixtures/src/config.tpl',
				rubyFile: '',
				dest: './test/fixtures/tmp/config.js'
			},
			emptyDestPath: {
				src: './test/fixtures/src/config.tpl',
				rubyFile: './test/fixtures/src/config.rb',
				dest: ''
			},
			nonExistingRubyFile: {
				src: './test/fixtures/src/config.tpl',
				rubyFile: './test/not_existing.rb',
				dest: './test/fixtures/tmp/config.js'
			},
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
		}
	});
};