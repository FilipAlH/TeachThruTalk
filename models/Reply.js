const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Reply extends Model {}

Reply.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    body:{
        type:DataTypes.STRING, 
    },
    thread_id:{
      type: DataTypes.INTEGER,
        references:{
            model:'thread',
            key:'id',
      },
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
    modelName: 'reply',
  }
);

module.exports = Reply;