const Joi = require("joi");

const errorHandler = require("../utils/validationErrorHandling");

const auth = {
  failAction: errorHandler,
  payload: Joi.object({
    username: Joi.string()
      .min(5)
      .email()
      .required()
      .description("username - should be an email"),
    password: Joi.string()
      .min(5)
      .required()
      .description("password - should have at least 5 characters "),
  }),
};

module.exports = { auth };
