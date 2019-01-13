const log4js = require('log4js');
const path = require('path');
log4js.configure({
    appenders:{
        console: {type: 'console'},
        app_file: {
            "type": "dateFile",
            "filename": path.join(__dirname,"../log/app/app.log"),
            "pattern": "-yyyy-MM-dd.log"
        },
        err_file: {
            "type": "dateFile",
            "filename": path.join(__dirname,"../log/error/error.log"),
            "pattern": "-yyyy-MM-dd.log"
        },
    },
    categories:{
        default:{appenders:['console','app_file'],level:'info'},
        ICE_APP:{appenders:['console','app_file'],level:'info'},
        ICE_ERR:{appenders:['console','err_file'],level:'error'},
    }
});

module.exports= {
    app_logger:(...m)=>log4js.getLogger('ICE').info(...m),
    error_logger:(...m)=>log4js.getLogger('ICE').error(...m)
};
