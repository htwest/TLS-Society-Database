const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

// ************
//   SIGN UP
// ************
router.post("/register", async (req, res) => {
  try {
    //  Password Hash
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);

    // Sign Up Info
    const name = req.body.user_name;
    const fname = req.body.user_fname;
    const lname = req.body.user_lname;
    const email = req.body.user_email;
    const password = hashedPassword;
    const approved = false;
    const mod = false;

    // Check if Username is Taken
    const userCheck = await pool.query(
      `SELECT * FROM users WHERE user_name = $1`,
      [name]
    );

    if (userCheck.rows.length > 0) {
      res.send("User Name Already Taken");
    } else {
      // Add User to DB
      const newUser = await pool.query(
        "INSERT INTO users (user_name, user_fname, user_lname, user_email, user_password, user_approved,  user_mod) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [name, fname, lname, email, password, approved, mod]
      );
      res.send("User Created");
    }
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// ************
//   LOG IN
// ************
router.post("/login", async (req, res) => {
  const name = req.body.user_name;
  const password = req.body.user_password;

  const user = await pool.query("SELECT * FROM users WHERE user_name = $1", [
    name,
  ]);

  if (user.rows.length > 0) {
    try {
      if (await bcrypt.compare(password, user.rows[0].user_password)) {
        res.send("Logged In");
      } else {
        res.send("Wrong Username/Password");
      }
    } catch (err) {
      res.sendStatus(500);
      console.log(err);
    }
  } else {
    res.send("Not a user");
  }
});

module.exports = router;
