const authService = require("../services/auth.service");

module.exports = async (request, session) => {
  const account = await authService.getAccount(session.id);

  if (!account) {
    return { isValid: false };
  }

  return { isValid: true, credentials: account };
};
