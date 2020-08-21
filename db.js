const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root@localhost/cohort_6');


module.exports = {sequelize};
