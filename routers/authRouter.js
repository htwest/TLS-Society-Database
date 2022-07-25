const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const passport = require("passport");

// ************
//   LOG IN
// ************
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("LOGIN PASSPORT AUTHENTICATION ERROR [STAGE 1]:");
      console.log(err);
    }
    if (!user) {
      res.send("No User Exists");
    } else {
      req.logIn(user, (err) => {
        if (err) {
          console.log("LOGIN PASSPORT AUTHENTICATION ERROR [STAGE 2]:");
          console.log(err);
        } else {
          res.send(req.user);
          // console.log(req.user);
        }
      });
    }
  })(req, res, next);
});

// ************
//   LOG OUT
// ************

router.post("/logout", (req, res, next) => {
  if (req.user) {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.send("logged out");
    });
  }
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
    const fname = req.body.fName;
    const lname = req.body.lName;
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
        "INSERT INTO users (user_name, user_fname, user_lname, user_email, user_password, user_approved, user_mod) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
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
//   GET USER
// ************
router.get("/user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
