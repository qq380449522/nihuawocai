var express = require('express');
var bodyParser = require('body-parser')
var router = require('./router');
var cookieSession = require('cookie-session');
var socketIO = require('./socket/socket');
var app = express();
app.use(express.static('node_modules'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use((req, res, next) => {

    if (req.session.username) {

        next();
    } else {
        if (req.url == '/signin.html' || req.url == '/signup.html') {
            next();
        } else {
            res.send("<script>alert('您还没有登陆');window.location = '/signin.html'</script>");
			
        }
    }
})
app.use(router);
var server = require('http').createServer(app);
socketIO(server);
server.listen(3000, () => console.log('running'));
