const signOut = (request, h) => {
  request.cookieAuth.clear();
  return h.response("you are signed out...").code(200);
};

module.exports = { signOut };
