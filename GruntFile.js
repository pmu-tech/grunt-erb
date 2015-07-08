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
                src: './samples/config.tpl',
                rubyFile: './samples/config.rb',
                dest: './samples/output/config-out.js'
            },
            otherConf: {
                src: './samples/other-conf.tpl',
                rubyFile: './samples/other-conf.rb',
                dest: './samples/output/other-conf.js'
            }
        }
    });

    grunt.registerTask('test', ['mochacli']);
};