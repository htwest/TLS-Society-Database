const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  console.log(req.body);
});

router.post("/register", (req, res) => {
  console.log(req.body);
});

router.get("/user", (req, res) => {
  console.log(req.body);
});

module.exports = router;
