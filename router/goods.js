const router = require('express').Router();

router.get('/',(req,res)=>{
    console.log(req.query);
    res.json({ ok:'ok'});
});

module.exports = router;
