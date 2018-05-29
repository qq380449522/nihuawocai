const Sequelize = require('sequelize');
const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = sequelize;