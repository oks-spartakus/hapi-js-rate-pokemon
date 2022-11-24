const path = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: path.join("tmp", "db.sqlite"),
});

const Pokemons = sequelize.define("pokemons", {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: Sequelize.STRING,
  points: { type: Sequelize.NUMBER, defaultValue: 0 },
  img: Sequelize.STRING,
});

const User = sequelize.define("user", {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

// Create table
Pokemons.sync();
User.sync();

module.exports = {
  Pokemons,
  User,
};
