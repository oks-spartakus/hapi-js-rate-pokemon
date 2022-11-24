const pokemonsService = require("../services/pokemons.service");

const get = async (req, h) => {
  const pokemon = await pokemonsService.findOne(req.params.id);
  const { id, name, img, points } = pokemon;
  return { id, name, img, points };
};

module.exports = { get };
