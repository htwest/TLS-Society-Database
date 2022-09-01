const express = require("express");
const router = express.Router();
const pool = require("../db");

// ************************************
//   GET ALL INTERNSHIPS
// ************************************
router.get("/list", async (req, res) => {
  try {
    // const list = await pool.query("SELECT * FROM internships");
    const list = await pool.query(
      "SELECT name, semester, position, type, poc_name, poc_email, app_open, app_deadline, description FROM internships"
    );
    res.send(list.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   GET PENDING INTERNSHIP BY USERNAME
// ************************************
router.post("/pending", async (req, res) => {
  try {
    const user = req.body.username;
    const pending = await pool.query(
      "SELECT * FROM pending WHERE username = $1",
      [user]
    );
    res.send(pending.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   GET ALL UNAPPROVED APPLICANTS
// ************************************

router.get("/unapproved", async (req, res) => {
  try {
    const list = await pool.query(
      "SELECT username, f_name, l_name FROM users WHERE approved = false"
    );
    res.send(list.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
