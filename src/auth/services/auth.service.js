const Boom = require("@hapi/boom");
const Bcrypt = require("bcrypt");

const { User } = require("../../models/models");

const signup = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    throw Boom.conflict("this user is already signed up");
  }

  const encrypted = await Bcrypt.hash(password, 10);
  
  try {
    return User.create({ email, password: encrypted });
  } catch (error) {
    throw Boom.internal(error.message);
  }
};

const signin = async (email, password) => {
  let user;
  try {
    user = await User.findOne({ where: { email } });
  } catch (error) {
    throw Boom.unauthorized("there was problem with singing you in");
  }

  const passwordChecked = await Bcrypt.compare(password, user.password);
  if (!user || !passwordChecked) {
    throw Boom.badData("incorrect password or email");
  }

  return user;
};

const getAccount = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user ?? null;
};

module.exports = { signup, signin, getAccount };
