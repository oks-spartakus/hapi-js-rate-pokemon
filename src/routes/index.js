const { authRoutes } = require("./auth.routes");
const { pokemonsRoutes } = require("./pokemons.routes");

module.exports = { auth: authRoutes, pokemons: pokemonsRoutes };
