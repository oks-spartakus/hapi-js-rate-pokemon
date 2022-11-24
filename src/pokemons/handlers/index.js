const { add } = require("./add.handler");
const { getTop } = require("./get-top.handler");
const { get } = require("./get.handler");
const { voteUp } = require("./vote-up.handler");

module.exports = { add, getTop, get, voteUp };
