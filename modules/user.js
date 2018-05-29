const Sequelize = require('sequelize');
var sequelize = require('./sequelize');
const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,

});


module.exports = User;