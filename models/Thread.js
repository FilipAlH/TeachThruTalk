const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Thread extends Model {}

Thread.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    title:{
      type:DataTypes.STRING,
    },
    body:{
        type:DataTypes.STRING, 
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
          model:'user',
          key:'id',
        },
      },
    language_id:{
    type: DataTypes.STRING,
    references:{
        model:'language',
        key:'id',
        },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'thread',
  }
);

module.exports = Thread;