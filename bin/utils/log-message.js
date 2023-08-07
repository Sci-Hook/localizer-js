"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_message = void 0;
var chalk = require("chalk");
require("syncforeachloop");
var prefix = '[' + chalk.cyanBright('localize') + ']';
var messages = {
    error: {
        config_is_not_json: "Config must be a JSON file.",
        config_cannot_read: "Config not created or in an unreadable format.",
        config_is_invalid_json: "Config is not in a valid JSON format.",
        required_config_option_is_not_assigned: "A required config property is not assigned. Unassigned value: {value}",
        required_config_option_is_assigned_invalid_type: "The property is assigned an incorrect type. Incorrect value: {value}"
    },
    success: {
        compiling_successfully: "Compiled successfully. Output file: {output_file}"
    }
};
function assign_values(msg, values) {
    var new_msg = msg;
    var keys = Object.keys(values);
    return new Promise(function (resolve, reject) {
        keys.syncForEach(function (key, next_key) {
            new_msg = new_msg.replace("{".concat(key, "}"), chalk.green(values[key]));
            next_key();
        }, function () {
            resolve(new_msg);
        });
    });
}
function log_message(type, message, values) {
    return __awaiter(this, void 0, void 0, function () {
        var messages_in_type, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    messages_in_type = Object.assign({}, messages[type]);
                    if (!message) return [3 /*break*/, 3];
                    msg = messages_in_type[message];
                    if (!values) return [3 /*break*/, 2];
                    return [4 /*yield*/, assign_values(msg, values)];
                case 1:
                    msg = _a.sent();
                    _a.label = 2;
                case 2:
                    if (type == 'error') {
                        console.log(prefix + ' ' + chalk.red(msg));
                    }
                    if (type == 'success') {
                        console.log(prefix + ' ' + chalk.green(msg));
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.log_message = log_message;
