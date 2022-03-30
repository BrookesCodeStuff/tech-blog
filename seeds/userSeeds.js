const { User } = require("../models");

const userdata = [
  {
    username: "bpaglia",
    email: "brooke@email.com",
    password: "password123",
  },
  {
    username: "kaitlynh",
    email: "kait@email.com",
    password: "tattoo123",
  },
  {
    username: "adaelv",
    email: "adael@email.com",
    password: "whatisgoku",
  },
  {
    username: "zeus",
    email: "zeus@email.com",
    password: "woof1234",
  },
];

const userSeeds = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = userSeeds;
