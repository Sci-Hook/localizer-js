import {config_type} from '../types/config-type';
import 'syncforeachloop';
import { log_message } from './log-message';

type requiments_type = {
    data_name:string,
    type:string,
    required:boolean
};

const value_requiments:requiments_type[] = [
    {
        data_name:"langs",
        type:"object",
        required:true
    },
    {
        data_name:"input-dir",
        type:"string",
        required:true
    },
    {
        data_name:"output-file",
        type:"string",
        required:true
    },
    {
        data_name:"files",
        type:"object",
        required:true
    },
    {
        data_name:"schema",
        type:"string",
        required:false
    },
    {
        data_name:"global",
        type:"boolean",
        required:false
    }
];

export function validate_config(config:config_type) {
    return new Promise<boolean>(async  (resolve, reject) => {
        var error:boolean = false;
        value_requiments.syncForEach(function (requiments:requiments_type,next) {

            var data = config[requiments.data_name];
            
            if (requiments.required) {
                if (!data) {
                    error = true;
                    log_message('error','required_config_option_is_not_assigned',{value:requiments.data_name});
                }
            }

            if (data) {
                if (typeof data != requiments.type) {
                    error = true;
                    log_message('error','required_config_option_is_assigned_invalid_type',{value:requiments.data_name});
                }
            }

            next();
        }, () => {
            resolve(!error)
        });

    });

}