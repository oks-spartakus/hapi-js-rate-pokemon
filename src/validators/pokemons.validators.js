const Joi = require("joi");

const errorHandler = require("../utils/validationErrorHandling");

const add = {
  failAction: errorHandler,
  payload: Joi.object({
    name: Joi.string()
      .min(1)
      .required()
      .description("name of the pokemon that is going to be added to db"),
    img: Joi.string()
      .min(5)
      .uri()
      .required()
      .description("utl to image of the pokemon"),
  }),
};

const get = {
  failAction: errorHandler,
  params: Joi.object({
    id: Joi.number()
      .min(0)
      .required()
      .description("id of the pokemon that is going to be shown"),
  }),
};

const vote = {
  failAction: "error",
  params: Joi.object({
    id: Joi.number()
      .min(0)
      .required()
      .description("id of the pokemon that will get your vote"),
  }),
};

module.exports = { add, get, vote };
