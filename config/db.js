var Sequelize = require('sequelize');
const sequelize = new Sequelize('countries_development', null, null, {
  dialect: 'postgres',
  logging: false
})

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.countries = require('../models/country.js')(sequelize, Sequelize);

module.exports = db;
