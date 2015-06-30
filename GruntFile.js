"use strict";

module.exports = function (grunt) {

    grunt.loadTasks('tasks');

    grunt.initConfig({
        erb: {
            configApp: {
                src: './test/config.tpl',
                configFile: './test/config.rb',
                dest: './test/config-out.js'
            },
            otherConf: {
                src: './test/other-conf.tpl',
                configFile: './test/other-conf.rb',
                dest: './test/other-conf.js'
            }
        }
    });
};