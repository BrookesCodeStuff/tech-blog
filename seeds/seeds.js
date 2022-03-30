const sequelize = require("../config/connection");
const userSeeds = require("./userSeeds");
const postSeeds = require("./postSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();

  await postSeeds();

  process.exit(0);
};

seedAll();
