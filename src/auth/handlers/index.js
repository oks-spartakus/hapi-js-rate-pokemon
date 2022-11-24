const { signup } = require("./signup.handler");
const { getSignin, postSignin } = require("./signin.handler");
const { signOut } = require("./signout.handler");

module.exports = { signup, getSignin, postSignin, signOut };
