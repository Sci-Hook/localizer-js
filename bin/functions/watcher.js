"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch_file = exports.watch_config = void 0;
var fs_1 = require("fs");
var compile_1 = require("../cli/compile");
var get_the_config_1 = require("../utils/get-the-config");
var validate_config_1 = require("../utils/validate-config");
var watched_files = [];
function watch_config(config_file) {
    try {
        (0, fs_1.watch)(process.cwd() + '/' + config_file, function (event, filename) {
            if (filename) {
                setTimeout(function () {
                    var config = (0, get_the_config_1.get_the_config)(config_file);
                    if (!config)
                        return;
                    var status = (0, validate_config_1.validate_config)(config);
                    if (!status)
                        return;
                    watch_file(config);
                }, 250);
            }
        });
    }
    catch (error) { }
}
exports.watch_config = watch_config;
function watch_file(config) {
    var files = config.files;
    var langs = config.langs;
    if (config.global) {
        langs.push('global');
    }
    var file_names = Object.keys(files);
    file_names.syncForEach(function (name, next_name) {
        langs.syncForEach(function (lang, next_lang) {
            var file_name = process.cwd() + '/' + config['input-dir'] + '/' + files[name] + '/' + lang + '.json';
            if (watched_files.indexOf(file_name) == -1) {
                watched_files.push(file_name);
                try {
                    (0, fs_1.watch)(file_name, function (event, filename) {
                        if (filename) {
                            (0, compile_1.create_output)(config);
                        }
                    });
                }
                catch (error) { }
            }
            next_lang();
        }, next_name);
    });
}
exports.watch_file = watch_file;
