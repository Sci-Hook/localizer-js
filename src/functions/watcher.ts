import { watch } from 'fs';
import { create_output } from '../cli/compile';
import { get_the_config } from '../utils/get-the-config';
import { validate_config } from '../utils/validate-config';

var watched_files:string[] = [];

export function watch_config(config_file) {
    try {
        watch(process.cwd() + '/' +  config_file, 
        (event, filename) => {
            if (filename) {
                setTimeout(() => {
                    const config = get_the_config(config_file);
                    if (!config) return;
                    var status = validate_config(config);
                    if (!status) return;

                    watch_file(config)  
                }, 250);  
            }
        });
    } catch (error) {}
}

export function watch_file(config) {

    var files = config.files;
    var langs = config.langs;
    if (config.global) {langs.push('global');}

    var file_names = Object.keys(files);

    file_names.syncForEach(function (name, next_name) {
        langs.syncForEach(function (lang, next_lang) {


            var file_name = process.cwd() + '/' + config['input-dir'] + '/' + files[name] + '/' + lang + '.json';

            if (watched_files.indexOf(file_name) == -1) {
                watched_files.push(file_name);
                try {
                    watch(file_name, 
                    (event, filename) => {
                        if (filename) {
                            create_output(config);
                        }
                    });
                } catch (error) {}
            }
            
            next_lang();
        }, next_name);
    });
}