# grunt-erb

A plugin to integrate erb compilation into your grunt workflow

## Installation

Run `npm install grunt-erb`

Important note : you need to have ruby installed and to be able to use `erb` command manually. This plugin is just a wrapper around this command.

## Usage

```
grunt.initConfig({
    erb: {
        configApp: {
            src: './test/config.tpl',
            rubyFile: './test/config.rb',
            dest: './test/config-out.js'
        },
        otherConf: {
            src: './test/other-conf.tpl',
            rubyFile: './test/other-conf.rb',
            dest: './test/other-conf.js'
        }
    }
});
```

## Config

* src : path to the erb template to use
* rubyFile : path to the ruby file to use when compiling
* dest : destination path for the generated file