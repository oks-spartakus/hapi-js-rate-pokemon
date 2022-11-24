const pokemonsService = require("../services/pokemons.service");

const getTop = async (req, h) =>
  (await pokemonsService.getTop()).map((poke) => ({
    id: poke.id,
    name: poke.name,
    img: poke.img,
    points: poke.points,
  }));

module.exports = { getTop };
