module.exports.home = (req, res) => {
  res.render("login");
};

module.exports.api = (req, res) => {
  res.json({ message: "Hello from Express backend!" });
};
