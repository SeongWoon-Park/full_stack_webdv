const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

//not exporting we need to export
module.exports = router 
//indexRouter made i server.js will be set to router variable

