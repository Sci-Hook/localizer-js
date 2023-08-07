"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json_parse = void 0;
var fs_1 = require("fs");
var json_parse = function (config) {
    return new Promise(function (resolve, reject) {
        var config_data = {};
        var config_location = config;
        try {
            var config_buff = (0, fs_1.readFileSync)("".concat(process.cwd(), "/").concat(config_location));
            if (!config_buff) {
                resolve(undefined);
            }
            if (config.endsWith(".json")) {
                try {
                    config_data = JSON.parse("".concat(config_buff));
                    resolve(config_data);
                }
                catch (error) {
                    resolve(undefined);
                }
            }
        }
        catch (error) {
            resolve(undefined);
        }
    });
};
exports.json_parse = json_parse;
