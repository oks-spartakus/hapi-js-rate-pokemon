const Boom = require("@hapi/boom");

const pokemonsService = require("../services/pokemons.service");

const add = async (req, h) => {
  const pokemon = await pokemonsService.add(req.payload.name, req.payload.img);
  const { id, name, img, points } = pokemon;
  return h.response({ id, name, img, points }).code(201);
};

module.exports = { add };
