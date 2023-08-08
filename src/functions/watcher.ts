import { watch } from 'fs';
import { create_output } from '../cli/compile';
import { config_type } from '../types/config-type';

export function watch_file(config: config_type) {

    var files = config.files;
    var langs = config.langs;
    if (config.global) {langs.push('global');}
    
    var file_names = Object.keys(files);

    file_names.syncForEach(function (name, next_name) {

        langs.syncForEach(function (lang, next_lang) {

            try {
                watch(process.cwd() + '/' + config['input-dir'] + '/' + files[name] + '/' + lang + '.json', (event, filename) => {
                    if (filename) {
                        create_output(config);
                    }
                });
            } catch (error) {}

            

            next_lang();
        }, next_name);

    });

}