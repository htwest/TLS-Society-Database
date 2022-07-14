const express = require("express");
const router = express.Router();
const pool = require("../db");

// ************************************
//   GET ALL INTERNSHIPS
// ************************************
router.get("/list", async (req, res) => {
  try {
    const list = await pool.query("SELECT * FROM internships");
    res.send(list.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   GET ALL UNAPPROVED APPLICANTS
// ************************************

router.get("/applicants/unapproved", async (req, res) => {
  try {
    const list = await pool.query(
      "SELECT user_name, user_fname, user_lname FROM users WHERE user_approved = false"
    );
    res.send(list.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
