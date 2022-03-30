const sequelize = require("../config/connection");
const userSeeds = require("./userSeeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await userSeeds();

  process.exit(0);
};

seedAll();
