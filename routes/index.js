const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const authenticateJWT = require("../middlewares/authenticateJWT");

/* GET: index route */
router.get("/", async function (req, res) {
  res.json({ msg: "success" });
});

/* GET: Private route */
router.get("/private-route", authenticateJWT, async function (req, res) {
  res.json({ msg: "success" });
});

/* GET: Public route */
router.get("/public-route", async function (req, res) {
  res.json({ msg: "success" });
});

/* GET: Obtain JWT */
router.get("/obtain-jwt", function (req, res) {
  const user = { username: "hello world", email: "hello@world.com" };
  const accessToken = jwt.sign(user, process.env.JWT_SECRET);
  res.json({ accessToken });
});

module.exports = router;
