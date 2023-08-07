import {config_type} from '../types/config-type';
import {json_parse} from '../utils/json-parse';
import 'syncforeachloop';

export function read_lang_files(config:config_type) {

    var langs = Object.assign([],config['langs']);
    
    if (config.global) {
        langs.push('global');
    }

    const input_dir = config['input-dir'];
    const file_names = Object.keys(config['files']);
    var result = {};

    return new Promise<object>((resolve) => {
        langs.syncForEach(function (lang,next_lang) {
            
            if (lang != 'global') result[lang] = {};
            
            file_names.syncForEach(async function (name,next_name) {

                var file = `${input_dir}/${config['files'][name]}/${lang}.json`;
                var data = await json_parse(file);

                if (lang == 'global') {
                    langs.forEach(lang => {
                        if (!result[lang]) return
                        if (!result[lang][name]) return
                        if (lang != 'global') {(<object>result[lang][name]) = Object.assign(result[lang][name],data)}  
                    });
                }else{
                    result[lang][name] = data;
                }
           
                next_name();
            },() => {
                next_lang();
            })
        },() => {
            resolve(result);
        });
    });
    
}