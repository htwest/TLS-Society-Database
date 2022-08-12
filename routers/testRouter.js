const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   TEST DB CONNECTION
// ************
router.get("/", async (req, res) => {
  try {
    const test = await pool.query(`SELECT * FROM test`);
    res.send(test.rows);
  } catch (err) {
    res.send("Did Not Work");
  }
});

// ************
//   SIGN UP
// ************

module.exports = router;
