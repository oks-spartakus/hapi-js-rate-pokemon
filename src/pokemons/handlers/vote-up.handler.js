const pokemonsService = require("../services/pokemons.service");

const voteUp = async (req, h) => {
  const voted = await pokemonsService.vote(req.params.id);
  const { id, name, img, points } = voted;
  return { id, name, img, points };
};

module.exports = { voteUp };
