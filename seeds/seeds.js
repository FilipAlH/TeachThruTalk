const sequelize = require('../config/connection');
const { Language, Reply, Thread, User } = require('../models');


const LanguageSeedData = require('./language.json');
const ReplySeedData = require('./reply.json');
const ThreadSeedData = require('./thread.json');
const UserSeedData = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const language = await Language.bulkCreate(LanguageSeedData);
  const users = await User.bulkCreate(UserSeedData, {
    individualHooks: true,
    returning: true,
  });
  const thread = await Thread.bulkCreate(ThreadSeedData);
  const reply = await Reply.bulkCreate(ReplySeedData);

  process.exit(0);
};

seedDatabase();
