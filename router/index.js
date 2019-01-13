const router = require('express').Router();
const {app_logger,error_logger} = require('../util/log');

router.use('*', async (req,res,next) => {
    let start_time = Date.now();
    await next();
    if(req.url.toString()!=='/login'){
        app_logger(`method:${req.method} url:${req.originalUrl} data:${req.method==='GET'? JSON.stringify(req.query) : 
            JSON.stringify(req.body)} cost:${Date.now()-start_time} ms`);
    }else{
        app_logger(`method:${req.method} url:${req.originalUrl} cost:${Date.now()-start_time} ms`);
    }
});

router.post('/api/login', (req, res) => {});
router.post('/api/logout', (req, res) => {});

router.use('/api/goods',require('./goods'));
router.use('/api/register',require('./register'));
router.use('/api/store',require('./store'));

module.exports = router;
