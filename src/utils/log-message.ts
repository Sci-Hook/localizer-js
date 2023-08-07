import * as chalk from 'chalk';
import 'syncforeachloop';

const prefix = '[' + chalk.cyanBright('localize') + ']'

const messages = {
    error:{
        config_is_not_json:"Config bir json olmalıdır.",
        config_cannot_read:"Config oluşturulmamış ya da okunamayan bir formatta.",
        config_is_invalid_json:"Config geçerli bir json fromatında değil.",
        required_config_option_is_not_assigned:"Gerekli bir config özelliği atanmamış. Atanmayan değer: {value}",
        required_config_option_is_assigned_invalid_type:"Özellik hatalı türde atanmış. Hatalı değer: {value}"
    }
}

function assign_values(msg:string,values) {
    var new_msg:string = msg;
    var keys = Object.keys(values);
    return new Promise<string>((resolve, reject) => {
        keys.syncForEach(function (key,next_key) {
            new_msg = new_msg.replace(`{${key}}`,chalk.green(values[key]));
            next_key();
        },() => {
            resolve(new_msg);
        })
    });
}

export async function log_message(type:'error'|'success'|'info',message,values?) {
    
    var messages_in_type = Object.assign({},messages[type]);
    
    if (message) {
        var msg:string = messages_in_type[message];
        if (values) {
            msg = await assign_values(msg,values);
        }

        console.log(prefix + ' ' + chalk.red(msg))

    }
}