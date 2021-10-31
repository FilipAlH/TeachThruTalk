// import models
const User = require('./User');
const Language = require('./Language');
const Thread = require('./Thread');
const Reply = require('./Reply');

Reply.belongsTo(Thread,{
    foreignKey:'thread_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});

Thread.hasMany(Reply,{
    foreignKey:'thread_id',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});

module.exports = {
  User,
  Language,
  Thread,
  Reply,
};
