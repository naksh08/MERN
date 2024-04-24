// home logic

const home = async (req, res) => {
  try {
    res.status(200).send("First MERN stack app");
  } catch (err) {
    res.status(500).send(err);
  }
};

// registration logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  home,
  register,
};
