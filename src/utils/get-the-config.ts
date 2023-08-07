import { readFileSync } from "fs";
import { log_message } from "./log-message";
import { config_type } from "../types/config-type";

export function get_the_config(config:string) :config_type|undefined {

    if (!config.endsWith('.json')) {
        log_message('error','config_is_not_json');
        return;
    }

    try {
        var data = readFileSync(process.cwd() + '/' + config);
    } catch (error) {
        log_message('error','config_cannot_read');
        return;
    }

    try {
        var parsed_data = JSON.parse(`${data}`);
    } catch (error) {
        log_message('error','config_is_invalid_json');
        return; 
    }

    return parsed_data;

}