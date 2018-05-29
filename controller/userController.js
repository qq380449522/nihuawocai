var User = require('../modules/user')
module.exports.signin = (req, res) => {
    User.findOne({ where: { username: req.body.username, password: req.body.password } })
        .then(data => {
            if (data != null) {
                req.session.username = req.body.username;
                res.send({
                    status: 200,
                    username:req.body.username
                })
            }
        })
}
module.exports.signup = (req, res) => {
    User.create(req.body)
        .then(data => {
            if (data != null) {
                res.send({
                    status: 200,
                    msg: "注册成功"
                })
            }
        })
}
module.exports.check = (req, res) => {
    var username = req.body.username;
    User.findOne({ where: { username: username } })
        .then(data => {
            if (data != null) {
                res.send({
                    status: 400,
                    msg: "该用户已经存在"
                })
            }
        })
}