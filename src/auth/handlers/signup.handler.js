const Boom = require("@hapi/boom");

const authService = require("../services/auth.service");

const signup = async (req, h) => {
  const user = await authService.signup(
    req.payload.username,
    req.payload.password
  );

  req.cookieAuth.set({ id: user.id });

  return h.response({ id: user.id, email: user.email }).code(201);
};

module.exports = { signup };
