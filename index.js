"use strict";

const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

const validateHandler = require("./src/auth/handlers/validate.handler");
const routes = require("./src/routes");

const swaggerOptions = {
  info: {
    title: "Test API Documentation",
    version: Pack.version,
  },
};

const options = {
  cookie: {
    name: "sid-example",
    password: "password-should-be-32-characters",
    isSecure: false,
  },
  redirectTo: "/signin",
  validate: validateHandler,
};

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
  });

  await server.register([
    require("@hapi/cookie"),
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.auth.strategy("session", "cookie", options);

  server.auth.default("session");

  server.route(routes.auth);
  server.route(routes.pokemons);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
