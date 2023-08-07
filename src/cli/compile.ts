import {get_the_config} from '../utils/get-the-config';
import { validate_config } from '../utils/validate-config';
import { read_lang_files } from '../functions/read-lang-files';
import { writeFileSync } from 'fs';

export async function compile(option) {
    
    const config_file = option.config;
    const config = get_the_config(config_file);
    if (!config) return;
    var status = validate_config(config);
    if (!status) return;
    var result = await read_lang_files(config);

    writeFileSync(process.cwd() + '/' +  config['output-file'],JSON.stringify(result));
}