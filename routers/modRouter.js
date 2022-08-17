const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   APPROVE USER
// ************
router.put("/approve/:username", async (req, res) => {
  try {
    const { username } = req.params;

    const updateUser = await pool.query(
      "UPDATE users SET approved = $1 WHERE username = $2",
      [true, username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      }
    );
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// ************
//   DELETE USER
// ************
router.delete("/delete/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE username = $1",
      [username],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send("User was Deleted");
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// ************************************
//   GET PENDING INTERNSHIPS
// ************************************
router.get("/pending", async (req, res) => {
  try {
    const user = req.body.username;
    const pending = await pool.query("SELECT * FROM pending");
    res.send(pending.rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
