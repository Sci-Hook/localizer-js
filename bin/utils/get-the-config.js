"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_the_config = void 0;
var fs_1 = require("fs");
var log_message_1 = require("./log-message");
function get_the_config(config) {
    if (!config.endsWith('.json')) {
        (0, log_message_1.log_message)('error', 'config_is_not_json');
        return;
    }
    try {
        var data = (0, fs_1.readFileSync)(process.cwd() + '/' + config);
    }
    catch (error) {
        (0, log_message_1.log_message)('error', 'config_cannot_read');
        return;
    }
    try {
        var parsed_data = JSON.parse("".concat(data));
    }
    catch (error) {
        (0, log_message_1.log_message)('error', 'config_is_invalid_json');
        return;
    }
    return parsed_data;
}
exports.get_the_config = get_the_config;
