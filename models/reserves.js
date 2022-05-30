'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserves extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reserves.init({
    name: DataTypes.STRING,
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
    attendees_count: DataTypes.INTEGER,
    attendees: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reserves',
    tableName: 'reserves',
    underscored: true,
  });
  return Reserves;
};