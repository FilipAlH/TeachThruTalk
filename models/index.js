// import models
const User = require('./User');
const Language = require('./Language');
const Thread = require('./Thread');
const Reply = require('./Reply');

Reply.belongsTo(User, {
  foreignKey: 'user_id'
});

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

User.hasMany(Reply, {
  foreignKey: 'user_id'
});

module.exports = {
  User,
  Language,
  Thread,
  Reply,
};
