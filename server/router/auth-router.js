// it is used to make our routes modular and easy to manage.

const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

// router.get("/", (req, res) => {
//   res.status(200).send("First MERN stack app");
// });

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);

// router.route("/register").get((req, res) => {
//   res.status(200).send("Registration page");
// });

module.exports = router;
