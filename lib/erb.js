var exec = require('child_process').exec;
var sys = require('sys');

function handleCmdOutput (error, stdout, stderr) {
    sys.print('stdout: ' + stdout);
    sys.print('stderr: ' + stderr);

    if (error) {
        console.log('error: ' + error);
    }
}

function isEmptyString (path) {
    return !path || path.trim().length === 0;
}

function compileTemplate (confFilePath, templateFilePath, destPath) {
    // Security problem ? Hum I think yes
    if (isEmptyString(confFilePath)) {
        throw "No config file specified";
    }

    if (isEmptyString(templateFilePath)) {
        throw "No template specified file specified";
    }

    if (isEmptyString(destPath)) {
        throw "No destination specified";
    }

    var cmd = "erb -r " + "'" + confFilePath + "'" + " " + templateFilePath + " > " + destPath;

    var child = exec(cmd, handleCmdOutput);
}

module.exports = {
    compileTemplate: compileTemplate
};