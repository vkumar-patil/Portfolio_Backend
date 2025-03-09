const User = require("../Model/UserModel");
exports.users = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || password) {
      res.status(400).send({ message: "all fild required" });
    }
    const newusers = new User({ name, email, password });
    await newusers.save();
    res.status(201).send({ message: "registration successful" });
  } catch (error) {
    res.status(500).send({ message: "server error", error: error });
  }
};
