const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   APPROVE USER
// ************
router.put("/approve/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;

    const updateUser = await pool.query(
      "UPDATE users SET user_approved = $1 WHERE user_name = $2",
      [true, user_name],
      (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send("User Approved");
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
router.delete("/delete/:user_name", async (req, res) => {
  try {
    const { user_name } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_name = $1",
      [user_name],
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

module.exports = router;
