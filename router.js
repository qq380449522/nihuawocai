var express = require('express');
var router = express.Router();
//user
var user = require('./controller/userController');

router
    .post('/signin',user.signin)
    .post('/check',user.check)
    .post('/signup',user.signup)
module.exports = router;

