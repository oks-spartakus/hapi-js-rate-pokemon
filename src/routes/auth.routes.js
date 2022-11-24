const handlers = require("../auth/handlers");
const validators = require("../validators").auth;

const authRoutes = [
  {
    method: "POST",
    path: "/signup",
    handler: handlers.signup,
    config: {
      auth: false,
      validate: validators.auth,
      tags: ["api", "auth", "signup"],
    },
  },

  {
    method: "POST",
    path: "/signin",
    options: {
      auth: {
        mode: "try",
      },
      handler: handlers.postSignin,
      validate: validators.auth,
      tags: ["api", "auth", "signin"],
    },
  },

  {
    method: "GET",
    path: "/signin",
    options: {
      auth: {
        mode: "try",
      },
      plugins: {
        cookie: {
          redirectTo: false,
        },
      },
      handler: handlers.getSignin,
      tags: ["api", "auth", "signin"],
    },
  },

  {
    method: "GET",
    path: "/signout",
    options: {
      handler: handlers.signOut,
      tags: ["api", "auth", "signout"],
    },
  },
];

module.exports = { authRoutes };
