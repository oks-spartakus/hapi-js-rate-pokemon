const Boom = require("@hapi/boom");

const authService = require("../services/auth.service");

const getSignin = async (request, h) => {
  if (request.auth.isAuthenticated) {
    return h.redirect("/");
  }

  return h.response("you have to sign in...");
};

const postSignin = async (request, h) => {
  const { username, password } = request.payload;
  if (!username || !password) {
    return h.response("missing username or password");
  }

  const account = await authService.signin(username, password);
  
  request.cookieAuth.set({ id: account.id });
  return h.response("welcome, you are signed in...");
};

module.exports = { getSignin, postSignin };
