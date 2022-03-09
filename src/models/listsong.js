'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listsong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listsong.init({
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    url: DataTypes.STRING,
    img_song: DataTypes.STRING,
    img_author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'listsong',
  });
  return listsong;
};