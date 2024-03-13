'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AcademicYear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AcademicYear.hasMany(models.ClosedDate);
      AcademicYear.hasMany(models.Article);
    }
  }
  AcademicYear.init({
    year: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'AcademicYear',
  });
  return AcademicYear;
};