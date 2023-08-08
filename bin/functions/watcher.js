"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watch_file = void 0;
var fs_1 = require("fs");
var compile_1 = require("../cli/compile");
function watch_file(config) {
    var files = config.files;
    var langs = config.langs;
    if (config.global) {
        langs.push('global');
    }
    var file_names = Object.keys(files);
    file_names.syncForEach(function (name, next_name) {
        langs.syncForEach(function (lang, next_lang) {
            try {
                (0, fs_1.watch)(process.cwd() + '/' + config['input-dir'] + '/' + files[name] + '/' + lang + '.json', function (event, filename) {
                    if (filename) {
                        (0, compile_1.create_output)(config);
                    }
                });
            }
            catch (error) { }
            next_lang();
        }, next_name);
    });
}
exports.watch_file = watch_file;
