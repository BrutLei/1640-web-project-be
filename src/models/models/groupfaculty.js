'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupFaculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupFaculty.init({
    groupId: DataTypes.INTEGER,
    facultyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GroupFaculty',
  });
  return GroupFaculty;
};