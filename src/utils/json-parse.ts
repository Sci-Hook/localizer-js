import {readFileSync} from 'fs';

export const json_parse = (config:string) => {
    return new Promise<any>((resolve, reject) => {
        var config_data:any = {};
        var config_location = config;
        try {
            var config_buff:any = readFileSync(`${process.cwd()}/${config_location}`);
            if (!config_buff) {
                resolve(undefined);
            }
            if(config.endsWith(".json")){
                try {
                    config_data = JSON.parse(`${config_buff}`);
                    resolve(config_data);
                } catch (error) {
                    resolve(undefined);
                }
            }
        } catch (error) {
            resolve(undefined);
        }   
    });
}