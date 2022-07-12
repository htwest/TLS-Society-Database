const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  console.log(req.body);
});

// ************
//   SIGN UP
// ************
router.post("/register", async (req, res) => {
  try {
    //  Password Hash
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Sign Up Info
    const name = req.body.username;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
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

router.get("/user", (req, res) => {
  console.log(req.body);
});

module.exports = router;
