const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Language extends Model {}

Language.init(
  {
    id:{
      type: DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
    },
    language_name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'language',
  }
);

module.exports = Language;