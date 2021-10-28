const sequelize = require('../config/connection');
const { Language, Reply, Thread, User } = require('../models');


const LanguageSeedData = require('./language.json');
const ReplySeedData = require('./reply.json');
const ThreadSeedData = require('./thread.json');
const UserSeedData = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const language = await Language.bulkCreate(LanguageSeedData);
  const thread = await Thread.bulkCreate(ThreadSeedData);
  const reply = await Reply.bulkCreate(ReplySeedData);
  const user = await User.bulkCreate(UserSeedData);


  for (const { id } of thread) {
    // Need to include a valid driver_id when creating a license
    const newReply = await Reply.create({
      thread_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
