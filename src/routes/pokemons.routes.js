const Joi = require("joi");
const handlers = require("../pokemons/handlers");
const validators = require("../validators").pokemons;

const pokemonsRoutes = [
  {
    method: "POST",
    path: "/pokemons",
    handler: handlers.add,
    config: {
      description: "adding new pokemon to db",
      notes: "additional information",
      tags: ["api", "add", "new", "pokemon", "create"],
      validate: validators.add,
    },
  },
  {
    method: "GET",
    path: "/pokemons",
    handler: handlers.getTop,
    config: {
      description: "getting list of top 10 pokemons",
      tags: ["api", "get", "list", "pokemon", "table", "results"],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/pokemons/{id}",
    handler: handlers.get,
    config: {
      validate: validators.get,
      description: "getting one pokemon by id",
      tags: ["api", "get", "pokemon", "find", "one"],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/pokemons/vote/{id}",
    handler: handlers.voteUp,
    config: {
      description: "voting for one pokemon",
      tags: ["api", "post", "vote", "pokemon", "one"],
      validate: validators.vote,
    },
  },
];

module.exports = { pokemonsRoutes };
