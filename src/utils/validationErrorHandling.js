module.exports = (req, h, err) => {
  req.log("error", err);
  throw err;
};
