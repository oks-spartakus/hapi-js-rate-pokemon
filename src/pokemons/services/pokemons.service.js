const Boom = require("@hapi/boom");

const { Pokemons } = require("../../models/models");

const add = async (name, img) => {
  const pokemon = await Pokemons.findOne({ where: { name } });
  if (pokemon) {
    throw Boom.conflict("this pokemon is already in db");
  }

  try {
    return Pokemons.create({ name, img });
  } catch (error) {
    throw Boom.internal(error.message);
  }
};

const getTop = async () => {
  try {
    return Pokemons.findAll({
      limit: 10,
      order: [["points", "DESC"]],
    });
  } catch (error) {
    throw Boom.internal(error.message);
  }
};

const findOne = async (id) => {
  let pokemon;
  try {
    pokemon = await Pokemons.findOne({ where: { id } });
  } catch (error) {
    throw Boom.internal(error.message);
  }

  if (!pokemon) {
    throw Boom.conflict("there is no pokemon with given id");
  }

  return pokemon;
};

const vote = async (id) => {
  const pokemon = await Pokemons.findOne({ where: { id } });
  if (!pokemon) {
    throw Boom.conflict("there is no pokemon with given id");
  }

  try {
    const points = pokemon.points + 1;
    pokemon.set({ points });

    await pokemon.save();
    return pokemon;
  } catch (error) {
    throw Boom.internal(error.message);
  }
};

module.exports = { add, getTop, findOne, vote };
