'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User);
      Article.belongsTo(models.Faculty);
      Article.belongsTo(models.AcademicYear);
    }
  }
  Article.init(
    {
      title: DataTypes.STRING,
      documentUrl: DataTypes.STRING,
      submittedDate: DataTypes.DATE,
      reviewStatus: DataTypes.ENUM('Reviewing', 'Approve', 'Reject'),
      userid: DataTypes.INTEGER,
      facultyId: DataTypes.INTEGER,
      academicYearId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Article',
    },
  );
  return Article;
};
