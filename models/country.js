module.exports = function(sequelize, DataType) {
  var Country = sequelize.define('country', {
    name: DataType.STRING,
  })
  return Country;
}
