const express = require("express");
const router = express.Router();
const pool = require("../db");

// ************
//   GET ALL INTERNSHIPS
// ************
router.get("/list", async (req, res) => {
  try {
    const list = await pool.query("SELECT * FROM internships");
    res.send(list.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
