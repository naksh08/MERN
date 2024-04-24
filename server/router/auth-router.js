// it is used to make our routes modular and easy to manage.

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("First MERN stack app");
});

router.route("/register").get((req, res) => {
  res.status(200).send("Registration page");
});

module.exports = router;
