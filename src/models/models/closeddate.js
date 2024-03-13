'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClosedDate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ClosedDate.belongsTo(models.Faculty);
      ClosedDate.belongsTo(models.AcademicYear);
    }
  }
  ClosedDate.init({
    closingDate: DataTypes.DATEONLY,
    academicYearId: DataTypes.INTEGER,
    facultyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClosedDate',
  });
  return ClosedDate;
};